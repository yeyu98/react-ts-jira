import React, { useEffect, useState } from 'react';
import ProjectBar from './ProjectBar';
import ProjectList from './ProjectList';

const apiUrl = process.env.REACT_APP_API_URL;
function Index(props) {
    const [projectInfo, setProjectInfo] = useState({
        name: '',
        projectId: ''
    })

    const [users, setUsers] = useState([])

    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(res=>res.json()).then(
            res => {
                console.log(res)
                setList(res)
            }
        )
    }, [projectInfo])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(res=>res.json()).then(
            res => {
                console.log(res)
                setUsers(res)
            }
        )
    }, [])

    return (
        <div>
            <ProjectBar users={users} projectInfo={projectInfo} setProjectInfo={setProjectInfo} />
            <ProjectList  users={users} list={list} />
        </div>
    );
}

export default Index;