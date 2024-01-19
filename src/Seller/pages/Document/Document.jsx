import React, {useEffect, useState} from 'react'
import Wrapper from '../../../components/wrapper/Wrapper';
import axios from 'axios';

const Document = () => {
    const [document, setDocument] = useState('');
    const [documentMess, setDocumentMess] = useState('');
    const [user_id, setUser_id] = useState('');
    const [valueDocs, setValueDocs] = useState('');
    const [documentType, setTypeDocument] = useState(null);
    const [docstatus, setDocStatus] = useState("");

    useEffect(() => {
        const users = localStorage.getItem('user');
        const userinfo = JSON.parse(users);
        setUser_id(userinfo.user.id);
    }
    );


    const getDocs = (event) => {
        const documents = event.target.files[0];
        const documentsval = event.target.value;
        const documentstype = event.target.files[0];
        setDocument(documents);
        setValueDocs(documentsval);
        if (documentstype.type === 'application/pdf') {
            setTypeDocument(documentstype.type);
            setDocumentMess("");
        }

        else {
            setDocumentMess("Upload only pdf format");
            setDocStatus("errormessage");
        }
    };

    async function uploadDocument() {
        let files = { document, user_id }
        const formData = new FormData();
        formData.append("file", document);
        formData.append("user", user_id);
        if (valueDocs === "") {
            setDocumentMess("Please select file to upload");
            setDocStatus("errormessage");
        }
        else if (document.size > 2 * 1024 * 1024) {
            setDocumentMess("file size must be less or equal to 2MB");
            setDocStatus("errormessage");
        }
        else if(documentType !== "application/pdf"){
            setDocumentMess("Upload only pdf format");
            setDocStatus("errormessage");
        }
        else {
            axios.post("http://127.0.0.1:8000/api/add_document", formData, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                }
            })
            .then(response => {
                console.log(response.data);
                setDocumentMess(response.data.message);
                setDocStatus(response.data.status);
            })
            .catch(error => {
                setDocumentMess("Error uploading you document");
                setDocStatus("errormessage");
            });
        }

    }
    return (
        <div className="topic">
            <section className="login">
                <Wrapper>
                    <h3 className='exp'>Upload your documents here</h3>
                    <div className="login__container">
                        <div className="form2">
                            <div className="form-contents1">
                                <div className="fnames">
                                    <label>Upload your document</label>
                                    <input type="file" placeholder='select your resume' className="fname" onChange={getDocs} required />
                                    <div className={docstatus}>{documentMess}</div>
                                </div>

                                <div className="summit-signup">
                                    <button className='sigbtn' onClick={uploadDocument} >Save</button>
                                    {/* <input type="submit" value="Log In" className="sigbtn"/> */}
                                </div>

                            </div>
                        </div>
                    </div>

                </Wrapper>
            </section>
        </div>
    )
}

export default Document