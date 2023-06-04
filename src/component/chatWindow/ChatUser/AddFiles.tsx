import { AddDocument, AddFile, Contact, TakePicture } from '../../icons/icons'

export const AddFiles = ({ styles, ...prop }: { styles: React.CSSProperties, className: string }) => {
  return (
    <ul {...prop} style={styles}>
      <li>
        <div role='button'>
          <Contact />
        </div>
      </li>
      <li>
        <div role='button'>
          <AddDocument />
        </div>
      </li>
      <li>
        <div role='button'>
          <TakePicture />
        </div>
      </li>
      <li>
        <div role='button'>
          <AddFile />
        </div>
      </li>
    </ul>
  )
}
