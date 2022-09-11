var path = require('path');
var strPath ="D:/Learning/MERN Stack/CourseNotes/NodeJs/toc.txt";

// path.dirname
    // console.log(path.dirname(strPath)); // D:/Learning/MERN Stack/CourseNotes/NodeJs

// path.basename
    // console.log(path.basename(strPath)); // toc.txt

// path.extname
    // console.log(path.extname(strPath)); // .txt

// path.format()
    /*
    root: the root
    dir: the folder path starting from the root
    base: the file name + extension
    name: the file name
    ext: the file extension
    */

    // var newPath = path.format({ dir: 'D:\\Learning\\MERN Stack\\CourseNotes\\NodeJs', base: 'toc.txt'});
    // console.log(newPath);
    // var newPath = path.format({ root:'D:', dir:'Learning\\MERN Stack\\CourseNotes\\NodeJs', base: 'toc.txt'});
    // console.log(newPath);
    // var newPath = path.format({ root:'D:', dir:'Learning\\MERN Stack\\CourseNotes\\NodeJs', name:'toc', ext:'.txt'});
    // console.log(newPath);


// path.isAbsolute()
    // var newPath = "D:/Learning/MERN Stack/CourseNotes/NodeJs/toc.txt"
    // console.log(path.isAbsolute(newPath))
    // var newPath = "./Learning/MERN Stack/CourseNotes/NodeJs/toc.txt"
    // console.log(path.isAbsolute(newPath))

// path.join()
    // var pathRoot="d:"
    // var pathDir="Learning/MERN Stack/CourseNotes/NodeJs"
    // var pathBase="toc.txt"
    // var newPath = path.join('/', pathRoot, pathDir, pathBase);
    // console.log(newPath);

// path.normalize()
    // var newPath = path.normalize('D:/Learning/.//../CourseNotes/NodeJs/toc.txt');
    // console.log(newPath);

// path.parse()
    // var newPath = "D:/Learning/MERN Stack/CourseNotes/NodeJs/toc.txt"
    // var resultPath =path.parse(newPath);
    // console.log(resultPath);