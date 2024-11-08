import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import TaskList from '../components/task/task_list';

function Home() {
  return (
    <Layout>
      <Navbar />
      <TaskList />
    </Layout>
  );
}
export default Home;
