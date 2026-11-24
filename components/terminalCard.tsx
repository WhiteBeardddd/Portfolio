const BIRTHDAY = new Date(2004, 8, 8);

function getAge(today = new Date()) {
  const age = today.getFullYear() - BIRTHDAY.getFullYear();
  const hadBirthday =
    today.getMonth() > BIRTHDAY.getMonth() ||
    (today.getMonth() === BIRTHDAY.getMonth() && today.getDate() >= BIRTHDAY.getDate());
  return hadBirthday ? age : age - 1;
}

const aboutMeLog = [
  {
    cmd: "cat studentinfo.txt",
    out: `
Age: ${getAge()}
Date of Birth: September 8, 2004
Address: Babag 1, Lapu-Lapu City, Cebu, Philippines
School: University of San Carlos (Expected Graduation: 2027)
Status: BS Information Technology Student | Year 4
Work: IT Intern @ Accenture | Travel Ops Team
isActive: True
Philosophy: "The real networking is the
            friends we made along the way",
            "I use DFS to clear
            dungeons in Valheim"
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
    cmd: "cat studentHobbies.txt",
    out: `
Hobby: I play survival games, moba, and watch anime
Dota: 4k hours played | Immortal | 5.6k MMR :)
Valheim: 1.4k hours played | i love building stuffs here
    `.trim(),
  },
];

function Prompt({ user, cmd }: { user: string; cmd?: string }) {
  return (
    <div className="whitespace-pre-wrap break-all">
      <span className="text-accent">{user}</span>
      <span className="ml-1 text-sky-300">~</span>
      <span className="ml-1 text-white">$</span>
      {cmd && <span className="ml-1.5 text-gray-200">{cmd}</span>}
    </div>
  );
}

export default function TerminalCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-[#070d19] shadow-2xl shadow-black/60">
      <div className="flex h-9 items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <p className="ml-3 font-mono text-xs text-gray-500">Charles@admin: ~</p>
      </div>

      <div className="space-y-3 overflow-x-auto p-4 font-mono text-[12px] leading-relaxed sm:p-5 sm:text-[13px]">
        <div>
          <Prompt user="Charles@admin" cmd="sudo ssh -p22077 s23100750@web.dcism.org" />
          <div className="ml-4 text-[#9ece6a]/90">
            <div>s23100750@web.dcism.org&apos;s password:</div>
            <div>Linux amos.dcism.org 6.1.0-41-amd64 #1 (2025-11-09) x86_64</div>
            <div>Last login: Thu Nov 27 18:29:22 2025 from 10.16.67.42</div>
          </div>
        </div>

        {aboutMeLog.map((line) => (
          <div key={line.cmd}>
            <Prompt user="[s23100750@amos]" cmd={line.cmd} />
            <div className="ml-4 whitespace-pre text-[#9ece6a]/90">{line.out}</div>
          </div>
        ))}

        <div className="flex items-center">
          <Prompt user="Charles@admin" />
          <span className="ml-1.5 inline-block h-4 w-2 animate-pulse bg-white" />
        </div>
      </div>
    </div>
  );
}
