import React, { useEffect, useState } from "react";
import { User } from "./ProjectBar";
import { Table } from "antd";
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

interface ProjectInfo {
  personName: string | undefined;
  projectName: string;
  key: number;
}

const columns = [
  {
    title: "项目名称",
    dataIndex: "projectName",
    key: "projectName",
  },
  {
    title: "负责人",
    dataIndex: "personName",
    key: "personName",
  },
];
function ProjectList(props: ProjectListProps) {
  const { list, users } = props;
  const [data, setData] = useState<ProjectInfo[]>([]);
  const getUserName = (personId: string) =>
    users.find((user) => user.id === personId)?.name;

  useEffect(() => {
    const _data = list.map((project, index) => ({
      personName: getUserName(project?.personId),
      projectName: project?.name,
      key: index,
    }));
    setData(_data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default ProjectList;
