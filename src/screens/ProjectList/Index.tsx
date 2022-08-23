import React, { useEffect, useState } from "react";
import ProjectBar from "./ProjectBar";
import ProjectList from "./ProjectList";
import ImgList from "./ImgList";
import * as qs from "qs"; // import * as ... 用法是将所有导出的东西都放在 ... 这个对象中
import useMount from "utils/hooks/useMount";
import { cleanObject } from "utils/utils";
import useDebounce from "utils/hooks/useDebounce";
import request from "utils/axios";

function ProjectMain(props: any) {
  const [projectInfo, setProjectInfo] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const debounceUser = useDebounce(projectInfo, 300);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    request(`/projects?${qs.stringify(cleanObject(debounceUser))}`).then(
      (res) => {
        console.log(res);
        setList(res);
      }
    );
  }, [debounceUser]);

  useMount(() => {
    request("/users").then((res) => {
      setUsers(res);
    });
  });

  return (
    <div>
      <ProjectBar
        users={users}
        projectInfo={projectInfo}
        setProjectInfo={setProjectInfo}
      />
      <ProjectList users={users} list={list} />
      <button onClick={handleClick}>切换</button>
      {isShow ? <ImgList /> : null}
    </div>
  );
}

export default ProjectMain;
