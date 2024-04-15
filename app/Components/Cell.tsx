import React, { Dispatch, SetStateAction } from 'react'

type cellProps ={
       id : number;
       go : string;
       setGo : Dispatch<SetStateAction<string>>;
       cells: string[];
       setcells: Dispatch<SetStateAction<string[]>>;
       cell :string;
       winningMessage :string;
}

const Cell = ({go ,setGo ,id , cells, setcells ,cell ,winningMessage}: cellProps) => {
       const handleClick = () =>{

              if(winningMessage){
                     return
              }

              const taken = !!cells[id]

              if(!taken){
                     if(go === "circle"){
                            handleCellChange("circle")
                            setGo("cross")
                     }
                     else if (go === "cross"){
                            handleCellChange("cross")
                            setGo("circle")
                     }
              }
              
       }

       const handleCellChange = (cellToChange : string) =>{
              let copyCelss = [...cells]
              copyCelss[id] = cellToChange
              setcells(copyCelss)
       }
  return (
    <div className='square' onClick={handleClick}>
      <div className={cell}> 
              {cell ?(cell ===  "circle" ? "O" : "X"):""}
      </div>
    </div>
  )
}

export default Cell
