// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const projects = [
    {
        title: "GitHub Profile Searcher",
        subtitle: "",
        description: "Short React + MUI project to test Material UI style library and how to create responsive web apps.",
        img: "https://i.imgur.com/JVX46FS.png"
    },
    {
        title: "This is another project",
        subtitle: "This is a subtitle",
        description: "Just a description",
        img: "https://i.imgur.com/JVX46FS.png"
    }
];

export default function handler(req, res) {
    res.status(200).json(projects);
}