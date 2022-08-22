import React from "react";

export interface User {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
  token: string;
}

interface ProjectBarProps {
  users: User[];
  projectInfo: {
    name: string;
    personId: string;
  };
  setProjectInfo: (params: ProjectBarProps["projectInfo"]) => void;
}
function ProjectBar(props: ProjectBarProps) {
  const { projectInfo, setProjectInfo, users } = props;

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={projectInfo.name}
            placeholder="项目名"
            onChange={(e) =>
              setProjectInfo({
                ...projectInfo,
                name: e.target.value,
              })
            }
          />
          <select
            value={projectInfo.personId}
            onChange={(e) =>
              setProjectInfo({
                ...projectInfo,
                personId: e.target.value,
              })
            }
          >
            <option value={""}>负责人</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default ProjectBar;
