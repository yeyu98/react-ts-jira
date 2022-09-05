import React from "react";
import { Form, Input, Select } from "antd";

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
const { Option } = Select;
function ProjectBar(props: ProjectBarProps) {
  const { projectInfo, setProjectInfo, users } = props;
  return (
    <div>
      <Form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item>
            <Input
              type="text"
              value={projectInfo?.name}
              placeholder="项目名"
              onChange={(e) =>
                setProjectInfo({
                  ...projectInfo,
                  name: e.target.value,
                })
              }
            />
          </Form.Item>
          <Form.Item>
            <Select
              value={projectInfo.personId}
              onChange={(value) =>
                setProjectInfo({
                  ...projectInfo,
                  personId: value,
                })
              }
            >
              <Option value={""}>负责人</Option>
              {users.map((user) => (
                <Option value={user?.id} key={user?.id}>
                  {user?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default ProjectBar;
