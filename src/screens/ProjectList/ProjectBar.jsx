import React from 'react';
function ProjectBar(props) {
    const { projectInfo, setProjectInfo, users } = props;

    return (
        <div>
            <form>
                <div>
                    <input type="text" value={projectInfo.name} placeholder="项目名" onChange={e => setProjectInfo({
                        ...projectInfo,
                        name: e.target.value
                    })} />
                    <select value={projectInfo.projectId} onChange={e => setProjectInfo({
                        ...projectInfo,
                        personId: e.target.value
                    })}>
                        <option value={''}>负责人</option>
                        {
                            users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
                        }
                    </select>
                </div>
            </form>
        </div>
    );
}

export default ProjectBar;