"use client";

import React from "react";
import styled from "styled-components";

const aboutMeLog = [
  {
    cmd: "cat studentinfo.txt",
    out: `
Age: 21
Date of Birth: September 8, 2004
Address: Babag 1, Lapu-Lapu City, Cebu, Philippines
School: University of San Carlos (Expected Graduation: 2027)
Status: BS Information Technology Student | Year 3
Hobby: I play survival games, moba, and watch anime
    `.trim(),
  },
  {
    cmd: "cat studentskillset.txt",
    out: `
Languages: Java, Python, Go, C, C#, TypeScript, SQL
Tools: Linux, VMware, GNS3, FTK Imager, Wireshark
Skills: Networking, CyberOps, 
        System Administration, Digital Forensics
        Network Management
    `.trim(),
  },
  {
    cmd: "cat studentroadmap.txt",
    out: `
Philosophy: "The real networking is the 
            friends we made along the way"
Dota MMR: Divine III | 5k :)
isActive: True
    `.trim(),
  },
];


const TerminalLabCard = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user">Charles@admin: ~</p>
        </div>

        <div className="terminal_body">
            <div className="terminal_block">
                <div className="terminal_promt">
                    <span className="terminal_user">Charles@admin</span>
                    <span className="terminal_location">~</span>
                    <span className="terminal_bling">$</span>
                    <span className="terminal_cmd">sudo ssh -p22077 s23100750@web.dcism.org</span>
                </div>
                <div className="terminal_output">s23100750@web.dcism.org's password:</div>
                <div className="terminal_output">Linux amos.dcism.org 6.1.0-41-amd64 #1 (2025-11-09) x86_64 </div>
                <div className="terminal_output">SMP PREEMPT_DYNAMIC Debian 6.1.158-1 (2025-11-09) x86_64 </div>
                <div className="terminal_output">Last login: Thu Nov 27 18:29:22 2025 from 10.16.67.42</div>
            </div>


          {aboutMeLog.map((line, i) => (
            <div key={i} className="terminal_block">
              <div className="terminal_promt">
                <span className="terminal_user">[s23100750@amos]</span>
                <span className="terminal_location">~</span>
                <span className="terminal_bling">$</span>
                <span className="terminal_cmd">{line.cmd}</span>
              </div>
              <div className="terminal_output">{line.out}</div>
            </div>
          ))}

          <div className="terminal_promt">
            <span className="terminal_user">Charles@admin</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_cursor" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .container {
    width: 100%;
    max-width: 100%;
    min-height: 260px;
    display: flex;
    flex-direction: column;
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: linear-gradient(#504b45, #3c3b37);
  }

  .butt {
    display: flex;
  }

  .btn {
    height: 12px;
    width: 12px;
    margin-right: 5px;
    border-radius: 50%;
    border: none;
    background: #777;
  }

  .btn-color {
    background: #ff5f56;
  }

  .user {
    color: #d5d0ce;
    margin-left: 8px;
    font-size: 13px;
  }

  .terminal_body {
    background: #0b0f14; /* deep neutral black */
    height: calc(100% - 30px);
    padding: 10px;
    font-size: 15px;
    color: #e5e7eb;
    overflow: hidden;
    font-family: "JetBrains Mono", monospace;
  }

  .terminal_user {
    color: #e4ae0b; /* your accent */
  }

  .terminal_location {
    color: #7aa2f7;
    margin-left: 4px;
  }

  .terminal_bling {
    color: #ffffff;
    margin-left: 4px;
  }

  .terminal_cmd {
    margin-left: 6px;
    color: #e5e7eb;
  }

  .terminal_output {
  margin-left: 18px;
  color: #9ece6a; /* muted CLI green */
  opacity: 0.95;
  white-space: pre;
}

.terminal_cursor {
  display: inline-block;
  height: 14px;
  width: 7px;
  margin-left: 6px;
  animation: blink 1.2s infinite;
}
  
  @keyframes blink {
    0%, 50% { background: white; }
    51%, 100% { background: transparent; }
  }
`;

export default TerminalLabCard;
