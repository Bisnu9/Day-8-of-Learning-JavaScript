let maze = [
    [0, 1, 0, 0], 
    [0, 1, 0, 0], 
    [0, 0, 0, 1],
    [0, 1, 0, 2]  
];


function Maze (maze){
    function traverse(row, column){
        if(maze[row][column] === 2){
            console.log("You have reached the finish line ", + row +" "+ column);
            return;
        }
        if(maze[row][column] === 0){
            console.log( + row + " "+ column+" You are in the right direction");
            maze[row,column] = "visited";
        }

        if(row < maze.length -1){
            traverse(row + 1, column);
        }else if(column < maze[row].length -1){
            traverse(row , column + 1);
        } else if(row > 0){
            traverse(row - 1, column);
        }else if(column > 0){
            traverse(row, column -1);
        }
    }
    traverse(0,0);
}
Maze(maze);
