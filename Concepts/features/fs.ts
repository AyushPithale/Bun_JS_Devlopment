import type { BunFile } from "bun";

async function fileSystemoperations() {
   //  read  a file 
   const file : BunFile = Bun.file('read.txt')
   console.log(file.text)
   console.log(file.size);
    console.log(file.type, "type"); 

    const exracttext = await file.text()
      console.log(exracttext, "extracted text");

    const unintBuffer = await file.arrayBuffer()
    console.log(unintBuffer, "unint buffer");
     

    const unintArray = await file.bytes()
    console.log(unintArray, "unint array");

    const content = "hello" 

    const writenFile = await Bun.write("write.txt", content)
    console.log(writenFile, "writen file");
   }

fileSystemoperations()