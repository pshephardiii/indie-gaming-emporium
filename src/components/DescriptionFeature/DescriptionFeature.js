import styles from './DescriptionFeature.module.scss'

export default function DescriptionFeature({ user, setUser, item }) {
    return(
        <p className={styles.descriptionFeature}>{item}</p>
    )
}