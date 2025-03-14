'use client'
import React from 'react';
import styles from '../../../styles/main.module.scss'
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

export default function Info() {

    return (
        <div className={styles.infoContainer}>
            <div className={styles.infoContent}>
                <Tabs aria-label="Options" className={styles.tabsList}>
                    <Tab key="photos" title="topico 1">
                        <Card>
                            <CardBody>
                                <h2 className={styles.infoTitle}>Title Lorem ipsum tes amet sit dolor?</h2>
                                <p className={styles.infoAnswer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac condimentum nibh. Integer efficitur feugiat erat, et blandit lacus. Nullam placerat, velit ac ultrices mollis, sem mi commodo ipsum, vel finibus neque ex vitae ipsum. Nam tincidunt, arcu at convallis accumsan, justo felis blandit justo, non cursus sapien massa fringilla lacus. Fusce vel velit quis tellus pellentesque lobortis eget et turpis. Suspendisse non posuere arcu. Quisque non massa metus. Nam sit amet purus eu ex ultrices fermentum eu sit amet lacus. Pellentesque mattis interdum dui at sollicitudin.
                                </p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="topico 2">
                        <Card>
                            <CardBody>
                                <h2 className={styles.infoTitle}>what about now?</h2>
                                <p className={styles.infoAnswer}>
                                    elit ac ultrices mollis, sem mi commodo ipsum, vel finibus neque ex vitae ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac condimentum nibh. Integer efficitur feugiat erat, et blandit lacus. Nullam placerat, v Nam tincidunt, arcu at convallis accumsan, justo felis blandit justo, non cursus sapien massa fringilla lacus. Fusce vel velit quis tellus pellentesque lobortis eget et turpis. Suspendisse non posuere arcu.
                                </p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="videos" title="topico 3">
                        <Card>
                            <CardBody>
                                <h2 className={styles.infoTitle}>teste sit dolor?</h2>
                                <p className={styles.infoAnswer}>justo felis blandit justo, non cursus sapien massa fringilla lacus. Fusce vel velit quis tellus pellentesque lobortis eget et turpis. Suspendisse non posuere arcu. Quisque non massa metus. Nam sit amet purus eu ex ultrices fermentum eu sit amet lacus. Pellentesque mattis interdum dui at sollicitudin.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac condimentum nibh. Integer efficitur feugiat erat, et blandit lacus. Nullam placerat, velit ac ultrices mollis, sem mi commodo ipsum, vel finibus neque ex vitae ipsum. Nam tincidunt, arcu at convallis accumsan,
                                </p>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
} 