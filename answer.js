function solution(L){
    var arr=[];
    var localnamearr=[];
    var finalArr=[];
    var domainnamearr=[];
    var count=0;
    
    // get all local names and domain names in different arrays
    for(var i=0;i<L.length;i++){
      arr= L[i].split("@"); 
      localnamearr.push(arr[0]);
      domainnamearr.push(arr[1]);
    }

    console.log("LocalNamesArray: ", localnamearr);
    console.log("DomainNamesArray: ", domainnamearr);

    // looping all local names and checking for conditions
    localnamearr.map((ele, index)=>{
        console.log("Element: ", ele);
        if(ele !== "null") {

        
        // case 1: if contains . +
        if(ele.includes(".") || ele.includes("+")){
            console.log("inside 1st if statement i.e. containing . or +");
            for(var i=index+1;i<localnamearr.length;i++){
                if(localnamearr[i].includes(".") || localnamearr[i].includes("+")){
                    if(domainnamearr[index]=== domainnamearr[i]){
                        finalArr.push(localnamearr[i]);
                        
                        localnamearr[i] = "null";
                        domainnamearr[i] = "null";
                    }
                }
            }
            finalArr.push(ele);
            console.log("final array: ", finalArr);
            console.log("local array: ", localnamearr);
           if(finalArr.length>1){
               console.log("count increment if more than 1 element in group");
               count++;
           }
           
           // empty the array
           finalArr=[];
        }

        // case 2: does not have . , +
        else {
            console.log("inside 2nd else statement i.e. not containing . or ");
            //console.log(index);
            for(var i=index+1;i<localnamearr.length;i++){
                if(ele===localnamearr[i]){
                    if(domainnamearr[index]=== domainnamearr[i]){
                        finalArr.push(localnamearr[i]);
                        localnamearr[i] = "null";
                        domainnamearr[i] = "null";
                    }
                }
            }
            finalArr.push(ele);
            console.log("final array: ", finalArr);
            console.log("local array: ", localnamearr);
            if(finalArr.length>1){
                console.log("count increment");
               count++;
           }
           finalArr=[];
        }
    }
    });
    console.log(count);
}


solution(["a.b@example.com", "ab+1@example.com", "y@example.com", "x@example.com", "x@exa.mple.com", "y@example.com", "y@example.com"]);
