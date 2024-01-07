const tabButtonList = ['component', 'bla', 'bla']

export default function TabButton({children}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    )
}