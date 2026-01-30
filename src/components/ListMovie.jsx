export default function ListMovie({items}){
    return(
        <table className='table'>
                  <thead>
                    <th>#</th>
                    <th>title</th>
                    <th>genre</th>
                    <th>status</th>
                    <th>actions</th>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </table>
    );
}