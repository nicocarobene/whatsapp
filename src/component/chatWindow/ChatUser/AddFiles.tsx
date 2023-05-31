import { AddDocument, AddFile, Contact, TakePicture } from '../../icons/icons'

export const AddFiles = ({ styles, ...prop }: { styles: React.CSSProperties, className: string }) => {
  console.log(prop)
  return (
    <ul {...prop} style={styles}>
      <li>
        <button>
          <Contact />
        </button>
      </li>
      <li>
        <button>
          <AddDocument />
        </button>
      </li>
      <li>
        <button>
          <TakePicture />
        </button>
      </li>
      <li>
        <button>
          <AddFile />
        </button>
      </li>
    </ul>
  )
}
