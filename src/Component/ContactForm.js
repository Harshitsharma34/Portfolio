import React, { useState } from 'react'
import axios from 'axios'
import './css/Contact.css'
import { Form, Input, InputNumber, Button } from 'antd';



export default () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        }
    };

    const onFinish = values => {
        console.log(values);
        setInputs({
            name: '',
            email: '',
            message: ''
        })
    };


    const [state, setState] = useState({
        visible: false,
        confirmLoading: false,
    })

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                message: ''
            })
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }
    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    const handleOk = () => {
        setState({
            visible: true,
            confirmLoading: true,
        });
        setTimeout(() => {
            setState({
                visible: false,
                confirmLoading: false,
            });
        }, 200);
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        setInputs({
            name: '',
            email: '',
            message: ''
        })
        axios({
            method: 'POST',
            url: 'https://formspree.io/myydrown',
            data: inputs
        })
            .then(response => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.'
                );

            })
            .catch(error => {
                handleServerResponse(false, error.response.data.error)
            });



    }
    return (

        <main >
            <Form {...layout} className="contactform" onSubmitCapture={handleOnSubmit} onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item className="formitem" name='name' label={<p className="formitemlist">Name</p>} rules={[{ required: true }]}>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                        />
                    </Form.Item>
                    <Form.Item className="formitem" name='email' label={<p className="formitemlist">Email</p>} rules={[{ type: 'email',required: true }]}>
                        <Input id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            value={inputs.email}
                        />
                    </Form.Item>
                    <Form.Item className="formitem" name='message' label={<p className="formitemlist">Write Back </p>}>
                        <Input.TextArea
                            id="message"
                            name="message"
                            onChange={handleOnChange}
                            required
                            value={inputs.message}
                        />
                    </Form.Item>
                    <div className="submit-Button">
                    <Button   htmlType="submit" style={{textAlign:"center",color:'white',backgroundColor:'tomato',borderRadius:'15px',fontFamily:"'Roboto', sans-serif"}} onSubmitCapture={onFinish} disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                            : 'Submitting...'}
                    </Button>
                    </div>
                {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            </Form>
            
        </main>
    )
}
