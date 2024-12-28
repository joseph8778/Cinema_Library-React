import { Skeleton } from '@chakra-ui/react';
import React from 'react';
import styles from "../Directory.module.css"

const SkeletonLoading = () => {
    return (
        <div className={styles.movie}>
            <Skeleton width="310px" height="460px"/>
        </div>
    );
}

export default SkeletonLoading;