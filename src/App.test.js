import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar'
import ComicProfile from './components/ComicProfile'
import Character from './components/Character';


const mockedfn = jest.fn();


describe("Navbar Input element",()=>{
  it("should render input element",()=>{
    render(<Navbar/>)
    const inputElement = screen.getByPlaceholderText('Search Title')
    expect(inputElement).toBeInTheDocument();
  });

  it("one input element",()=>{
    render(<Navbar/>)
    const inputElement = screen.getAllByPlaceholderText('Search Title')
    expect(inputElement.length).toBe(1)
  });

  it("should be able to type input",()=>{
    render( <App/> )
    const inputElement = screen.getByPlaceholderText('Search Title');
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: 'Iron man' } })
    console.log(inputElement)
    expect(inputElement.value).toBe("Iron man")
  })
})

describe("Comic data",()=>{
  const data = [{
    "id": 1, "thumbnail": {
      "path": "1"
    }, "title": '1', "issueNumber": 1
  },
  {
    "id": 2, "thumbnail": {
      "path": "2"
    }, "title": '2', "issueNumber": 2
  },
  {
    "id": 3, "thumbnail": {
      "path": "3"
    }, "title": '3', "issueNumber": 3
  },
  {
    "id": 4, "thumbnail": {
      "path": "4"
    }, "title": '4', "issueNumber": 4
  },
]
  it("is comic div rendered",()=>{
    render(<ComicProfile data={data} />)
    const comic = screen.getAllByTitle("comicInfo")
    expect(comic[0]).toBeInTheDocument()
  })
  it("number of comic displayed",()=>{
    render(<ComicProfile data={data} />)
    const comic = screen.getAllByTitle('comicInfo')
    expect(comic.length).toBe(4)
  
  })
})

it("is character redereing",()=>{
  const charData = {"thumbnail":{"path":"img"}}
  render(
  <Character handleEvent={mockedfn } hero={charData}/>
  )
  const character = screen.getByTitle('hero')
  expect(character).toBeInTheDocument()

})