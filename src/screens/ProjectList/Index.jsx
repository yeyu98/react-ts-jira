import React, { useEffect, useState } from 'react';
import ProjectBar from './ProjectBar';
import ProjectList from './ProjectList';
import * as qs from 'qs'; // import * as ... 用法是将所有导出的东西都放在 ... 这个对象中
import { cleanObject } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;
function Index(props) {
    const [projectInfo, setProjectInfo] = useState({
        name: '',
        personId: ''
    })

    const [users, setUsers] = useState([])

    const [list, setList] = useState([])

    useEffect(() => {
        console.log(projectInfo)
        console.log(cleanObject(projectInfo))
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(projectInfo))}`).then(res=>res.json()).then(
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