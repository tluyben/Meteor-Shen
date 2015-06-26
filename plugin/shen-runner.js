  

function replaceAll(find, replace, str) {
	  return str.replace(new RegExp(find, 'g'), replace);
}

var handler = function (compileStep) {                                       

  var Shen = null; 
  if (Package['tluyben:sheninit'].ShenJsRuntime == undefined) {
    eval(Npm.require('fs').readFileSync("./packages/tluyben:shen/shen-init.js", 'utf-8')); 
    Package['tluyben:sheninit'].ShenJsRuntime = shen;
    Shen = shen; 
  } else {
    Shen = Package['tluyben:sheninit'].ShenJsRuntime; 
  } 

  var source = compileStep.read().toString('utf8');                                      
  var outputFile = compileStep.inputPath + ".js";                                        
                                                                                         
  try {    
	  output = Shen.exec("js.from-string", [source]); 
  } catch (e) {                                                                          
    throw new Error(                                                                     
      compileStep.inputPath + ':' +                                                      
      e.message                                                                          
    );                                                                                   
  }                                                                                      

  output = "var pwd = process.env.PWD; var shen = Package['tluyben:sheninit'].ShenJsRuntime; if (shen==undefined) {eval(Npm.require('fs').readFileSync(pwd+'/packages/tluyben:shen/shen-init.js', 'utf-8'));}" + output + ";console.log('');"; // no idea why , but without the last console.log() it doesn't work? 
  compileStep.addJavaScript({                                                            
    path: outputFile,                                                                    
    sourcePath: compileStep.inputPath,                                                   
    data: output,                                                          
    // sourceMap: ... ?                                                   
    bare: compileStep.fileOptions.bare                                                   
  });
};                                                                                       
                                                                                         
Plugin.registerSourceHandler("shen", handler);                                         	 

