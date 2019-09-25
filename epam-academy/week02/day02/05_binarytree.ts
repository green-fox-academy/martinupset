interface Tree {
    empty(): boolean;
    add(value: number): void;
    remove(value: number): void;
    search(value: number): boolean
  }

class TreeNode{
    data: number
    left: TreeNode = null
    right: TreeNode = null

    constructor(date: number){
        this.data =date
    }

    showright(){
        return this.right
    }

    showleft(){
        return this.left
    }
}

class BinaryTree implements Tree{
    private root : TreeNode = null
    private nodeList:number[] = []
    private addHelper(node: TreeNode, value: number):TreeNode{
        let newNode = new TreeNode(value);
        if(node == null){
            node = newNode
        }
        else{
            if(node.showleft === null){
                node.right = this.addHelper(node.right, value)
            }
            else{
                node.left = this.addHelper(node.left, value)
            }

            return node
        }
    }
    empty(): boolean{
        return this.root == null
    }

    add(value : number): void{
        this.nodeList.push(value)
        this.root = this.addHelper(this.root, value)
    }

    
}