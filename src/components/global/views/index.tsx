interface ViewsProps {
    className: string
}

const Views: React.FC<ViewsProps> = (props) => {
    const { className } = props
    return (
        <div className={className}>todo: 评论</div>
    )
}
export default Views