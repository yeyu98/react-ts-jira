import React from "react";
import { User } from "./ProjectBar";
export interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
}
interface ProjectListProps {
  list: Project[];
  users: User[];
}
function ProjectList(props: ProjectListProps) {
  const { list, users } = props;
  console.log(list, users);
  const getUserName = (personId: string) =>
    users.find((user) => user.id === personId)?.name;
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
          {list.map((project) => {
            return (
              <tr key={project?.id}>
                <td>{project?.name}</td>
                <td>{getUserName(project?.personId)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectList;
