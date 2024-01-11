import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  const [isModalOpen,setIsModalOpen] = useState(false)
  return (
    <div>
      <button onClick={()=>setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={()=>setIsModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
