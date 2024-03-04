import React from 'react';
import Card from './Card';
import './Skills.css'

const Skills = () => {
  const webDevelopmentData = {
    category: 'Web Development',
    skills: [
      { name: 'React', imageUrl: 'https://imgs.search.brave.com/vo6BX_XoOCp2zawTPCX6LDR7GYMp4BkOPyDkA_f-uFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn.svg' },
      { name: 'MongoDB', imageUrl: 'https://imgs.search.brave.com/_jzzMUfqHVcbRbtDWAcH_HQtG8nxCOdT9n34O-VClSU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9tb25nb2Ri/LWljb24taWNvbi0x/MDI0eDY3NS1rN2x4/bzhteS5wbmc' },
      { name: 'NodeJS', imageUrl: 'https://imgs.search.brave.com/mt3_ltFUor3sJTiWHdmFbORv1QE3PUtM9gsygWvKgFQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tRkJFMTIy/RTM3Ny1zZWVrbG9n/by5jb20ucG5n' },
      { name: 'JavaScript', imageUrl: 'https://imgs.search.brave.com/obi6waBHrXy0h09CpHCRdyvOQ2aBOPtlj-OcC6xcJ3g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn.svg' },
      { name: 'HTML', imageUrl: 'https://imgs.search.brave.com/uYdp_mAugIFP1aLvY9mARspEn5lIZXXkA4glfSRW6Lc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw.svg' },
      { name: 'CSS', imageUrl: 'https://imgs.search.brave.com/N1hgWKHudLbcpp0RBaetQ76JGZu8Djm_02jt8OagdHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg' }
    ]}
    
    const CompetitiveData = { 
    category: 'Competitive Coding',
    skills: [
      { name: 'LeetCode', imageUrl: 'https://imgs.search.brave.com/Z4bDDKGirOdE1wVbm7JIJg6Vcwtsc3Aey_dcXXM3tRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWxlZXRjb2RlLTM1/MjE1NDItMjk0NDk2/MC5wbmc_Zj13ZWJw/Jnc9MjU2' },
      { name: 'Codechef', imageUrl: 'https://imgs.search.brave.com/CrFxgAFoGcVy7BJ_ft-3WPP2ZqdCmd8RWnZUvYzDYPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29kZWNoZWZ2aXQu/Y29tL0ltYWdlcy9j/b2RlY2hlZl9sb2dv/XzEuc3Zn.svg' },
      { name: 'C++', imageUrl: 'https://imgs.search.brave.com/-aqoL7TbF81YYKKNWeBQt95KSjJ7exTkEElmLx4-xmk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2lz/b2NwcC9sb2dvcy9t/YXN0ZXIvY3BwX2xv/Z28ucG5n' },
      { name: 'C', imageUrl: 'https://imgs.search.brave.com/QPSMbYoy80SUN7E2_VgmMSRhAq48NqfxAjUqPET1gEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxwaGFybS5jb20v/YXNzZXRzLzY5OC9D/JTIwUHJvZ3JhbW1p/bmctNTk1YjQwYjY1/YmEwMzZlZDExN2Qz/ZWRjLnN2Zw.svg' },
    ]}
    const languagesData =  {
    category: 'Languages',
    skills: [
      { name: 'C++', imageUrl: 'https://imgs.search.brave.com/-aqoL7TbF81YYKKNWeBQt95KSjJ7exTkEElmLx4-xmk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2lz/b2NwcC9sb2dvcy9t/YXN0ZXIvY3BwX2xv/Z28ucG5n' },
      { name: 'C', imageUrl: 'https://imgs.search.brave.com/QPSMbYoy80SUN7E2_VgmMSRhAq48NqfxAjUqPET1gEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aXN1/YWxwaGFybS5jb20v/YXNzZXRzLzY5OC9D/JTIwUHJvZ3JhbW1p/bmctNTk1YjQwYjY1/YmEwMzZlZDExN2Qz/ZWRjLnN2Zw.svg' },
      { name: 'Python', imageUrl: 'https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n' },
      { name: 'Javascript', imageUrl: 'https://imgs.search.brave.com/_MqSZDZZ8WP4_0pswoFcuZhUl3zblcWfMTYrznY4WxU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn.svg' },
      { name: 'JAVA', imageUrl: 'https://imgs.search.brave.com/ujP9IOX6k64YxZ-UCyYa5ae66jJUlSL04iBOll-KuTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0phdmEtTG9nby01/MDB4MzEzLnBuZw' },
    ],
  };
  const deeplearningData = {
    category: 'Deep Learning Beginner',
    skills: [
      { name: 'TensorFlow', imageUrl: 'https://imgs.search.brave.com/OVLUdDyIvb_RQTn5qROP9FlT_iRW8OMZiRfzO_xRWow/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dGVuc29yZmxvdy5z/dmc.svg' },
      { name: 'Python', imageUrl: 'https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n' },
      { name: 'Jupyter', imageUrl: 'https://imgs.search.brave.com/6iEQBc70Q9eDLZGL1Dc5Y5FKwCFeUtDtvWQbNpZZORY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDEvSnVweXRl/cl9Mb2dvLTU5N3g3/MDAucG5n' },
      { name: 'Google Collab', imageUrl: 'https://imgs.search.brave.com/t9BDuX9wdkNucATrdA-_4NLw7Aq3zDPkqlT7Q4TxiVU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/M2MyZTRjOWM0YmFh/ZDRjZTIyYmY5ZWYu/cG5n' },
      { name: 'Matplotlib', imageUrl: 'https://imgs.search.brave.com/KVkGrQ94-8ioQxuWFch5DLZ4zvuk8ZWCGe2kYoB1MEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYXRw/bG90bGliLm9yZy9f/c3RhdGljL2ltYWdl/cy9kb2N1bWVudGF0/aW9uLnN2Zw.svg' },
      { name: 'Neural Networking', imageUrl: 'https://imgs.search.brave.com/bq9nMLoto7gK7xgNQ1_c_oSDHeSHBZwlZmXAAiW1spg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vOTU5NGM5/ZTgyMTIzNDE2YzFh/NDk3NzkzNTIyMzBm/OWFlMTBlMGUzOC0z/NDd4MzQ4LnBuZz93/PTEwODAmcT03Mg' }
    ]}

    const OthersData = {
        category: 'Others',
        skills: [
          { name: 'Management', imageUrl: 'https://imgs.search.brave.com/Ck8a-drXsaTr4fTvCMF9CdwmX71w6DUjDykJjNzn_fg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzkxLzM3LzEy/LzM2MF9GXzM5MTM3/MTIyN19PT1BLdXl3/bWY2ZHF3T1RzdzRE/ZnUwaURlakxLeVpa/Qy5qcGc' },
          { name: 'Leadership', imageUrl: 'https://imgs.search.brave.com/Ck8a-drXsaTr4fTvCMF9CdwmX71w6DUjDykJjNzn_fg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzkxLzM3LzEy/LzM2MF9GXzM5MTM3/MTIyN19PT1BLdXl3/bWY2ZHF3T1RzdzRE/ZnUwaURlakxLeVpa/Qy5qcGc' },
          { name: 'Communication Skills', imageUrl: 'https://imgs.search.brave.com/Ck8a-drXsaTr4fTvCMF9CdwmX71w6DUjDykJjNzn_fg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzkxLzM3LzEy/LzM2MF9GXzM5MTM3/MTIyN19PT1BLdXl3/bWY2ZHF3T1RzdzRE/ZnUwaURlakxLeVpa/Qy5qcGc' },
          { name: 'Public Speaking', imageUrl: 'https://imgs.search.brave.com/Ck8a-drXsaTr4fTvCMF9CdwmX71w6DUjDykJjNzn_fg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzkxLzM3LzEy/LzM2MF9GXzM5MTM3/MTIyN19PT1BLdXl3/bWY2ZHF3T1RzdzRE/ZnUwaURlakxLeVpa/Qy5qcGc' },
          ]}

  return (
    <div className = "skillscontainer" id = "skills" >
      <Card category={webDevelopmentData.category} skills={webDevelopmentData.skills} />
      <Card category={deeplearningData.category} skills={deeplearningData.skills} />
      <Card category={CompetitiveData.category} skills={CompetitiveData.skills} />
      <Card category={languagesData.category} skills={languagesData.skills} />
      <Card category={OthersData.category} skills={OthersData.skills} />
    </div>
  );
};

export default Skills;
