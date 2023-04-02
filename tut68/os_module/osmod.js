const os=require ("os");

console.log(os.arch());

const freeMemory =os.freemem();
console.log(freeMemory);

const ttlMemory =os.totalmem();
console.log(ttlMemory);

console.log(`${freeMemory/1024/1024/1024}`);

console.log(os.platform());