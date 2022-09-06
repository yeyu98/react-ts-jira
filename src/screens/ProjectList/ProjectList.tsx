import { User } from "./ProjectBar";
import { Table } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
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
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
  key?: number;
}

function ProjectList(props: ProjectListProps) {
  const [data, setData] = useState<ProjectInfo[]>([]);
  const { list, users } = props;
  const getUserName = (personId: string) =>
    users.find((user) => user.id === personId)?.name;

  const columns = [
    {
      title: "项目名称",
      dataIndex: "name",
      key: "name",
      sorter: (a: ProjectInfo, b: ProjectInfo) => a.name.localeCompare(b.name),
    },
    {
      title: "部门",
      dataIndex: "organization",
      key: "organization",
    },
    {
      title: "负责人",
      dataIndex: "personId",
      key: "personId",
      render: (value: string, project: ProjectInfo) => {
        return <span>{getUserName(project?.personId)}</span>;
      },
    },
    {
      title: "创建时间",
      dataIndex: "created",
      key: "created",
      render: (value: string, project: ProjectInfo) => {
        return (
          <span>
            {project.created
              ? dayjs(project?.created).format("YYYY-MM-DD")
              : "无"}
          </span>
        );
      },
    },
  ];

  useEffect(() => {
    const _data = list.map((item, index) => ({
      ...item,
      key: index,
    }));
    setData(_data);
  }, [list]);

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default ProjectList;
