export function Footer({year}) {
    return (
        <p>Created by <a href="https://github.com/dow-mp">dow-mp</a> &copy; {year.toLocaleDateString('en-US')}</p>
    )
}

