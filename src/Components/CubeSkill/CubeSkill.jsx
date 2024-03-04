import React from 'react';
import { SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiThreedotjs } from 'react-icons/si';
import './CubeSkill.css';

const CubeSkill = () => {
  const images = [
    "https://imgs.search.brave.com/pnJmxnvnATtGg6S3atoFMrSpS39K9vS8VAE9dqTWwWY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn.svg",
    "https://imgs.search.brave.com/rqA1OcIzhXD4nlS9rcYPxJzyjMRRoCfPFOFLiwgwNi4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tOTA5eDEw/MjQtaWc0Z205azcu/cG5n",
    "https://imgs.search.brave.com/c_doPwn4CxKoT9FpBre9dwZK3n4eSimUSCPKktxlvf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC90ZW5zb3Jm/bG93LWljb24tNDc4/eDUxMi10bHQ4dGpi/ZS5wbmc",
    "https://imgs.search.brave.com/d44acjX2ouh6h5xHIihmevY8UXBzUqmNo-odyuJlHOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9jLWljb24t/MTgyMngyMDQ4LXk2/dXRydjQzLnBuZw",
    "https://imgs.search.brave.com/_jzzMUfqHVcbRbtDWAcH_HQtG8nxCOdT9n34O-VClSU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9tb25nb2Ri/LWljb24taWNvbi0x/MDI0eDY3NS1rN2x4/bzhteS5wbmc",
    "https://imgs.search.brave.com/QAXYKFn6XEN0TKVs2lYgQUV6AKLEzB8ZAklwoHh-j8k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9weXRob24t/aWNvbi0yNTZ4MjU0/LW03bjcyY2UzLnBu/Zw",
  ];

  return (
    <div className="homeSkills ">
      <h1 className = "skillsheadinghai">SKILLS</h1>
      
      <div className="homeCubeSkills">
        {images.map((imageUrl, index) => (
          <div key={index} className={`homeCubeSkillsFaces homeCubeSkillsFace${index + 1}`}>
            <img src={imageUrl} alt={`Face${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="cubeShadow"></div>

      <div className="homeskillsBox" id="homeskillsBox">
        <SiCplusplus />
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiMongodb />
        <SiExpress />
        <SiReact />
        <SiNodedotjs />
        <SiThreedotjs />
      </div>
    </div>
  );
}

export default CubeSkill;
