import React from 'react';

function ProjectList(props) {
    const { list, users } = props;
    const getUserName = (personId) => users.find(user => user.id === personId)?.name;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>项目名称</td>
                        <td>负责人</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(project => {
                            return <tr key={project.id}>
                                <td>{project.name}</td>
                                <td>{getUserName(project.personId)}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    );
}

export default ProjectList;