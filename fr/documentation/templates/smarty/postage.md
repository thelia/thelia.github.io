---
layout: home
title: Affichage des frais de port dans un template
sidebar: templates
lang: fr
subnav: templates_smarty_postage
---

# Frais de port pour le panier #

Le bloc Smarty `postage` affiche les frais de ports pour le panier courant si celui contient des produits.

Thelia utilise les règles suivantes pour choisir le pays :

  - le pays de l'adresse de de livraison du client attaché au panier courant si celui-ci existe
  - le pays dont l'identifiant est sauvegardé dans un cookie si le client a changé de pays par défaut
  - le pays par défaut de la boutique si ce dernier existe

La boucle choisi le pays dont les frais de port sont les moins élevés pour le pays sélectionné.


## Sorties ##

Dans le block ```postage``` les variables suivantes sont accessibles :

 - **$country_id**: l'identifiant du pays ou ```null```
 - **$delivery_id**: l'identifiant du mode de livraison ```null```
 - **$postage**: le montant des frais de port ou 0.0
 - **$is_customizable**: indique si les les frais de port peuvent être personnalisés. Valorisé à `False` quand le client est connecté et a une adresse de livraison valide.


## Une implémentation pour le template `default` du template font-office ##

<div class="code large-12">

{% highlight smarty %}

{postage}
{assign var="postageAmount" value=$postage }
<tr>
    <td class="product" colspan="2">
        <form action="{url path="/cart/country"}" class="form-inline" method="post">
            <h3>
                {intl l="Estimated shipping "}
                {if $is_customizable == false}
                    {loop type="country" name="countryLoop" id="$country_id"}
                    {intl l="for"} {$TITLE}
                    {/loop}
                {/if}
            </h3>
            {if $is_customizable}
            <div>
                <label for="cart-country">{intl l="Select your country:"}</label>
                <select id="cart-country" name="country">
                {loop type="country" name="countryLoop" with_area="true"}
                    <option value="{$ID}" {if $ID == $country_id }selected="selected" {/if}>{$TITLE}</option>
                {/loop}
                </select>
                <a class="btn btn-change-country" href="#"><i class="icon-refresh"></i> {intl l="update"}</a>
            </div>
            {/if}
            {if $delivery_id != 0 }
            <div>
                {intl l="with:"} {loop type="delivery" name="deliveryLoop" id=$delivery_id}{$TITLE} {/loop}
            </div>
            {else}
            <div class="alert alert-danger">
                {intl l="No deliveries available for this cart and this country"}
            </div>
            {/if}
        </form>
    </td>
    <td class="unitprice">{$postage} {currency attr="symbol"}</td>
    <td class="qty">-</td>
    <td class="subprice">{$postage} {currency attr="symbol"}</td>
</tr>
{/postage}
</tbody>
<tfoot>
    <tr>
        <td colspan="3" class="empty">&nbsp;</td>
        <th class="total">{intl l="Total"}</th>
        <td class="total">
            <div class="total-price">
                {assign var="totalAmount" value={cart attr='total_taxed_price_without_discount'} + $postageAmount }
                <span class="price">{$totalAmount} {currency attr="symbol"}</span>
            </div>
        </td>
    </tr>
</tfoot>
{% endhighlight %}

</div>


Et le script javascrit associé pour déclencher l'envoi du formulaire. Cela permet de changer le pays par défaut. Le choix du visiteur est enregistré dans un cookie par la méthode ```Front\Controller\FrontCrontroller::changeCountry```.

<div class="code large-12">

{% highlight smarty %}

<script>
    $(document).ready(function(){
        $(".btn-change-country").click(function(e){
            e.preventDefault();
            var $form = $(this).parents('form');
            $form.submit();
        })
    });
</script>

{% endhighlight %}

</div>
