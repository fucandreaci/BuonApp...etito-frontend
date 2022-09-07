import React from 'react';
import {loadTranslations} from 'i18n/i18n.service';
import {useTranslation} from 'react-i18next';
import enTexts from './i18n/en.json';
import itTexts from './i18n/it.json';
import deTexts from './i18n/de.json';
import esTexts from './i18n/es.json';
import frTexts from './i18n/fr.json';
import nlTexts from './i18n/nl.json';
import svTexts from './i18n/sv.json';
import './recipeDetails.scss'
import {useParams} from 'react-router-dom';
import {Button, Header, Heading} from 'grommet';
import {Logout} from 'grommet-icons';
import {CustomBadge} from '../../shared/customBadge/customBadge.component';

interface RecipeDetailsProps{
}

const componentClassName = 'recipe-details';

export const RecipeDetails = (props: RecipeDetailsProps) => {
    const i18nTexts = {
        'en': enTexts,
        'it': itTexts,
        'de': deTexts,
        'es': esTexts,
        'fr': frTexts,
        'nl': nlTexts,
        'sv': svTexts,
    };
    loadTranslations('recipeDetails', i18nTexts);
    const {t} = useTranslation('recipeDetails');
    const params = useParams<{recipeId: string}>();

    return (
        <div className={`${componentClassName}`}>
            <Header background="primary" pad={{horizontal: 'small'}}>
                <Heading margin="none" style={{fontSize: '25px'}}>Buon app...etito</Heading>
                <Button icon={<Logout />} hoverIndicator />
            </Header>

            <div className={`${componentClassName}__image`}>
                <img src={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'} />
            </div>

            <div className={`${componentClassName}__content`}>
                <div className={`${componentClassName}__card`}>
                    <h2 className={`${componentClassName}__title`}>Gnocchi con salsa di pomodoro</h2>

                    <div className={`${componentClassName}__type`}>
                        <CustomBadge value={'type.name'}/>
                        <CustomBadge value={'type.name'}/>
                        <CustomBadge value={'type.name'}/>
                        <CustomBadge value={'type.name'}/>
                    </div>

                    <div className={`${componentClassName}__ingredients`}>
                        <h4 className={`${componentClassName}__subtitle`}>Ingredients</h4>
                        <ul>
                            <li>100 g acqua</li>
                            <li>100 g acqua</li>
                            <li>100 g acqua</li>
                            <li>100 g acqua</li>
                        </ul>
                    </div>

                    <div className={`${componentClassName}__preparation`}>
                        <h4 className={`${componentClassName}__subtitle`}>Preparation</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur veniam similique ad
                            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                            quasi aliquam eligendi, placeat qui corporis!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
