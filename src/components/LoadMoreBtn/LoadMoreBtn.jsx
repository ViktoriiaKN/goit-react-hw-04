import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({handleLoadMore}) => {
  return (
    <div className={styles.loadMoreContainer}><button onClick={handleLoadMore} className={styles.loadMoreButton}>Load more</button></div>
  )
}

export default LoadMoreBtn
