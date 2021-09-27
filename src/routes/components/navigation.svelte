<script>
    import { _ } from "../../services/i18n"
</script>

<!-- Navigation -->
<div class="top-bar" id="realEstateMenu">
    <div class="top-bar-left">
        <ul class="menu" data-responsive-menu="accordion">
            <li class="menu-text">{$_("general.title")}</li>
            <li><a href="#">
                <button class="button accent shadow radius">{$_("menu.index")}</button>
            </a></li>
            <li><a href="#">
                <button class="button accent shadow radius">{$_("general.ask_question")}</button>
            </a></li>
            <li><a href="#">
                <button class="button accent shadow radius">{$_("menu.articles")}</button>
            </a></li>
        </ul>
    </div>
    <div class="top-bar-right">
        <ul class="menu">
            <li><a href="#">{$_("menu.my_account")}</a></li>
            <li><a class="button accent shadow radius">{$_("menu.log_in")}</a></li>
        </ul>
    </div>
</div>
<!-- /Navigation -->