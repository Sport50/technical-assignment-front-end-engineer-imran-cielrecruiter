import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { articalProps } from '../../interface/interface';

export default function ArticalCard(props: articalProps) {
  return (
    <Card>
      <CardContent>
        <h5>{props?.artical?.title}</h5>
        <span>{props?.artical?.authorEmail}</span>
        <p> {`${props?.artical?.body.substring(0, 150)}...`}</p>
      </CardContent>
    </Card>
  );
}
