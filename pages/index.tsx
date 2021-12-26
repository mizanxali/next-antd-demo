import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import styled from "styled-components";


const Home: NextPage = () => {

  interface User {
    key: number;
    name: string;
    age: number;
  }
  
  const columns: ColumnsType<User> = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      render: (name) => <h1 className={styles.title}>{name}</h1> //css modules
    },
    {
      key: 'age',
      title: 'Age',
      dataIndex: 'age',
      render: (age) => <Title>{age}</Title> //styled comp
    },
  ];
  
  const data: User[] = [
    {
      key: 0,
      name: 'Jack',
      age: 34
    },
    {
      key: 1,
      name: 'Mary',
      age: 22
    },
  ];

  return (
    <div className={styles.container}>
      <Table<User> dataSource={data} columns={columns} />
    </div>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: yellow;
`;

export default Home
