/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');

const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VVXZOiOBT9L3nFXgEF1KquWgRFRBpB0datfQgQPhrkIwkgTvnft2int6dqdmd7eUqF5Nxz7z335BvIi4QgA3Vg9g2UOGkgRf2SdiUCMzCvwxBhMAABpBDMgL+YVMX55bxIR0ksvDWVy1iyo1XswXewe52H6mmrmOYQpuNncB+AsvayxP8F4D6WTCnPY3lKOqhZknBbVOvcKvEiu662VtW+QX6ECfuyc5/BvUeECU7yaFHG6IIwzAzUbWGCv0af3ZjL2qae75nMVhSnPMmO22FTdSpqfP2gRe6JZ28r1suKr9FnnFCaJLpnWmjJxzrRVXLMbjRacZPbxLkddtH1EGzWm3rJPuiTJMpRoAcopwntvlz31qhqGYddGuRKBfctsdpOHx6JU1i7/eEiqozFVsXVP/Hp14jjxHkN12fdXV61MzZgEAnGOLMtfz8UDMNbW6/rtAzZnDkWPxLf4g+tpP+n7q7Wpe1u+bY80SbeV7QeSkdbOBJVE+PDvNnMUdoYTtUuc/Nr9IVWqNpLM2rWjkSZ462zQ8XYrQ4iXIivLBaq6OX1vLbUxpl80oe0xr9ieb1BQ7mG+0uMj+jEu8fsdGJNPDHVt01wZp1UTjQbuQJeHJjJ+Tis2p1jO360tqNLqwUnVDY5x6rrHVH1th5ahJqCEj2/Z5SiTg/AjLsPAEZRQiiGNCnyfo8fTwYABs0O+RjR9/KCKDoOxzutCCOjGjORqdWrWIzyxQp2hG+ukacpkpMgpXbtZzAAJS58RAgKVgmhBe5MRAiMEAGzP9471SeN0aWgaJ0EYAZ4YSyNpiOeZUej38lvbQwpgWX5W44oGIAQFxcTgRnFNRqA9wtLYT6fiqqgSoIi8Atlwi5ldiEJozEvyqPJtE/x8gi6Ty6IUHgpwYyThJHECRLH3f8cgBxd6UM/fdYjbgDCBBPq5nWZFTD4ENfHT+j7RZ3TXZf7Sr9AGMzYz21EaZJHpM+sziH246RBSp8HmIUwI+g+AAFqEh/1eEDWgkq45m8O97SOpw7LyvyKyn3l4iJ/HPElYSzynPeE/NHkacxOvCfocezTdCqFwsgPJYh80JfjMbr9nX9VEnrLV8GtIYdoge3pdasXdqmnlzCc2O9qeEgAYRR8VNmDflqX+yJF+S9w65q6I8ErJ5jOISoFvz2iN/HkGin7A+5DWmD27dMulSLo8U7npbLnlzbou9XH+UkNs+nPeshhfxgYSR41RQ4GIHu/xnGsyHMTTuA5lpsKs+nv/f797xb1+AGiMMkImAFFf0UimSwXppXnxNY02YxkJep78NHSjxF9jIBb1OFpb5sLNqmLenmb2xcnZ5K9cuiIKkTj3bYKwgg7ERc9/wMImIFNl1momcrScsxqOlN5N/bIpdl5oSm3Yizv4rXPqOp2z5wpGeq3cM8chVTXlg1+Wb+EG5Safiqu8q2/VaU2IWq4i8R5+9xHe0jrx2A1HBZxeMCbrmSHsDjJhRwYF/V2HpuusXqtPImXGWsba4y5FQ3VkagTutFQtJdXaXpR1spBpJpn7/QRJJXpCZpVnuf2wzzezSv7/mgk38f6IcQwQe8e/L1H/9XKz5Fg74MfIL6b+r/Ibn4wNjm/YNX5i46rTey37jo9D4u0zXwsMydr8Sbmr2ODPb2cwL2f9TKDNCzwBcwAuXgQDAAu6n5g9TwsfhFJkV1dkR9ZZ5BQ+dMEfvYVURQep7a4KFeQxGAGtsdUmPfy7uSy3FFIPywFyP23YBpw/wvSQdVE9QgAAA==';

const prefix = process.env.PREFIX || '-';

const author = process.env.OWNER_NAME || 'eliakim';

const packname = process.env.PACKNAME || 'eliakim';

const dev = process.env.OWNER_NUMBER || '254739320033';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'ELIAKIM-MD';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
