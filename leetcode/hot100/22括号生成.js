// 添加左括号的条件为 左括号数量大于0
// 添加右括号的条件为 左括号的数量小于右括号
// 左括号数量大于右括号 直接return
var generateParenthesis = function(n) {
  let result = []
  dfs(n,n,'');

  function dfs(left,right,res){
    if(left===0&&right===0){
      result.push(res);
      return 
    }
    if(left>right){
      return 
    }
    if(left>0){
      dfs(left-1,right,res+'(')
    }

    if(left<right){
      dfs(left,right-1,res+')')
    }
  }
};


generateParenthesis(3)