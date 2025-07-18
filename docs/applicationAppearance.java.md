# `applicationAppearance` Submodule <a name="`applicationAppearance` Submodule" id="@cdktf/provider-gitlab.applicationAppearance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationAppearance <a name="ApplicationAppearance" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance gitlab_application_appearance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.application_appearance.ApplicationAppearance;

ApplicationAppearance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .emailHeaderAndFooterEnabled(java.lang.Boolean)
//  .emailHeaderAndFooterEnabled(IResolvable)
//  .footerMessage(java.lang.String)
//  .headerMessage(java.lang.String)
//  .keepSettingsOnDestroy(java.lang.Boolean)
//  .keepSettingsOnDestroy(IResolvable)
//  .memberGuidelines(java.lang.String)
//  .messageBackgroundColor(java.lang.String)
//  .messageFontColor(java.lang.String)
//  .newProjectGuidelines(java.lang.String)
//  .profileImageGuidelines(java.lang.String)
//  .pwaDescription(java.lang.String)
//  .pwaName(java.lang.String)
//  .pwaShortName(java.lang.String)
//  .title(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.emailHeaderAndFooterEnabled">emailHeaderAndFooterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.footerMessage">footerMessage</a></code> | <code>java.lang.String</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.headerMessage">headerMessage</a></code> | <code>java.lang.String</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.memberGuidelines">memberGuidelines</a></code> | <code>java.lang.String</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageBackgroundColor">messageBackgroundColor</a></code> | <code>java.lang.String</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageFontColor">messageFontColor</a></code> | <code>java.lang.String</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.newProjectGuidelines">newProjectGuidelines</a></code> | <code>java.lang.String</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.profileImageGuidelines">profileImageGuidelines</a></code> | <code>java.lang.String</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaDescription">pwaDescription</a></code> | <code>java.lang.String</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaName">pwaName</a></code> | <code>java.lang.String</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaShortName">pwaShortName</a></code> | <code>java.lang.String</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Application title on the sign-in and sign-up page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `emailHeaderAndFooterEnabled`<sup>Optional</sup> <a name="emailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.emailHeaderAndFooterEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `footerMessage`<sup>Optional</sup> <a name="footerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.footerMessage"></a>

- *Type:* java.lang.String

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `headerMessage`<sup>Optional</sup> <a name="headerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.headerMessage"></a>

- *Type:* java.lang.String

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `keepSettingsOnDestroy`<sup>Optional</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.keepSettingsOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `memberGuidelines`<sup>Optional</sup> <a name="memberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.memberGuidelines"></a>

- *Type:* java.lang.String

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `messageBackgroundColor`<sup>Optional</sup> <a name="messageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageBackgroundColor"></a>

- *Type:* java.lang.String

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `messageFontColor`<sup>Optional</sup> <a name="messageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageFontColor"></a>

- *Type:* java.lang.String

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `newProjectGuidelines`<sup>Optional</sup> <a name="newProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.newProjectGuidelines"></a>

- *Type:* java.lang.String

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `profileImageGuidelines`<sup>Optional</sup> <a name="profileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.profileImageGuidelines"></a>

- *Type:* java.lang.String

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `pwaDescription`<sup>Optional</sup> <a name="pwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaDescription"></a>

- *Type:* java.lang.String

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `pwaName`<sup>Optional</sup> <a name="pwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaName"></a>

- *Type:* java.lang.String

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `pwaShortName`<sup>Optional</sup> <a name="pwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaShortName"></a>

- *Type:* java.lang.String

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#title ApplicationAppearance#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled">resetEmailHeaderAndFooterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage">resetFooterMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage">resetHeaderMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy">resetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines">resetMemberGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor">resetMessageBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor">resetMessageFontColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines">resetNewProjectGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines">resetProfileImageGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription">resetPwaDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName">resetPwaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName">resetPwaShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmailHeaderAndFooterEnabled` <a name="resetEmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled"></a>

```java
public void resetEmailHeaderAndFooterEnabled()
```

##### `resetFooterMessage` <a name="resetFooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage"></a>

```java
public void resetFooterMessage()
```

##### `resetHeaderMessage` <a name="resetHeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage"></a>

```java
public void resetHeaderMessage()
```

##### `resetKeepSettingsOnDestroy` <a name="resetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy"></a>

```java
public void resetKeepSettingsOnDestroy()
```

##### `resetMemberGuidelines` <a name="resetMemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines"></a>

```java
public void resetMemberGuidelines()
```

##### `resetMessageBackgroundColor` <a name="resetMessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor"></a>

```java
public void resetMessageBackgroundColor()
```

##### `resetMessageFontColor` <a name="resetMessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor"></a>

```java
public void resetMessageFontColor()
```

##### `resetNewProjectGuidelines` <a name="resetNewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines"></a>

```java
public void resetNewProjectGuidelines()
```

##### `resetProfileImageGuidelines` <a name="resetProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines"></a>

```java
public void resetProfileImageGuidelines()
```

##### `resetPwaDescription` <a name="resetPwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription"></a>

```java
public void resetPwaDescription()
```

##### `resetPwaName` <a name="resetPwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName"></a>

```java
public void resetPwaName()
```

##### `resetPwaShortName` <a name="resetPwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName"></a>

```java
public void resetPwaShortName()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle"></a>

```java
public void resetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.application_appearance.ApplicationAppearance;

ApplicationAppearance.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.application_appearance.ApplicationAppearance;

ApplicationAppearance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.application_appearance.ApplicationAppearance;

ApplicationAppearance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.application_appearance.ApplicationAppearance;

ApplicationAppearance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationAppearance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationAppearance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationAppearance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationAppearance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput">emailHeaderAndFooterEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput">footerMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput">headerMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput">keepSettingsOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput">memberGuidelinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput">messageBackgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput">messageFontColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput">newProjectGuidelinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput">profileImageGuidelinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput">pwaDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput">pwaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput">pwaShortNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled">emailHeaderAndFooterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage">footerMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage">headerMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines">memberGuidelines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor">messageBackgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor">messageFontColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines">newProjectGuidelines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines">profileImageGuidelines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription">pwaDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName">pwaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName">pwaShortName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailHeaderAndFooterEnabledInput`<sup>Optional</sup> <a name="emailHeaderAndFooterEnabledInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput"></a>

```java
public java.lang.Object getEmailHeaderAndFooterEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `footerMessageInput`<sup>Optional</sup> <a name="footerMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput"></a>

```java
public java.lang.String getFooterMessageInput();
```

- *Type:* java.lang.String

---

##### `headerMessageInput`<sup>Optional</sup> <a name="headerMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput"></a>

```java
public java.lang.String getHeaderMessageInput();
```

- *Type:* java.lang.String

---

##### `keepSettingsOnDestroyInput`<sup>Optional</sup> <a name="keepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput"></a>

```java
public java.lang.Object getKeepSettingsOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memberGuidelinesInput`<sup>Optional</sup> <a name="memberGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput"></a>

```java
public java.lang.String getMemberGuidelinesInput();
```

- *Type:* java.lang.String

---

##### `messageBackgroundColorInput`<sup>Optional</sup> <a name="messageBackgroundColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput"></a>

```java
public java.lang.String getMessageBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `messageFontColorInput`<sup>Optional</sup> <a name="messageFontColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput"></a>

```java
public java.lang.String getMessageFontColorInput();
```

- *Type:* java.lang.String

---

##### `newProjectGuidelinesInput`<sup>Optional</sup> <a name="newProjectGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput"></a>

```java
public java.lang.String getNewProjectGuidelinesInput();
```

- *Type:* java.lang.String

---

##### `profileImageGuidelinesInput`<sup>Optional</sup> <a name="profileImageGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput"></a>

```java
public java.lang.String getProfileImageGuidelinesInput();
```

- *Type:* java.lang.String

---

##### `pwaDescriptionInput`<sup>Optional</sup> <a name="pwaDescriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput"></a>

```java
public java.lang.String getPwaDescriptionInput();
```

- *Type:* java.lang.String

---

##### `pwaNameInput`<sup>Optional</sup> <a name="pwaNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput"></a>

```java
public java.lang.String getPwaNameInput();
```

- *Type:* java.lang.String

---

##### `pwaShortNameInput`<sup>Optional</sup> <a name="pwaShortNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput"></a>

```java
public java.lang.String getPwaShortNameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailHeaderAndFooterEnabled`<sup>Required</sup> <a name="emailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled"></a>

```java
public java.lang.Object getEmailHeaderAndFooterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `footerMessage`<sup>Required</sup> <a name="footerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage"></a>

```java
public java.lang.String getFooterMessage();
```

- *Type:* java.lang.String

---

##### `headerMessage`<sup>Required</sup> <a name="headerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage"></a>

```java
public java.lang.String getHeaderMessage();
```

- *Type:* java.lang.String

---

##### `keepSettingsOnDestroy`<sup>Required</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy"></a>

```java
public java.lang.Object getKeepSettingsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `memberGuidelines`<sup>Required</sup> <a name="memberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines"></a>

```java
public java.lang.String getMemberGuidelines();
```

- *Type:* java.lang.String

---

##### `messageBackgroundColor`<sup>Required</sup> <a name="messageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor"></a>

```java
public java.lang.String getMessageBackgroundColor();
```

- *Type:* java.lang.String

---

##### `messageFontColor`<sup>Required</sup> <a name="messageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor"></a>

```java
public java.lang.String getMessageFontColor();
```

- *Type:* java.lang.String

---

##### `newProjectGuidelines`<sup>Required</sup> <a name="newProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines"></a>

```java
public java.lang.String getNewProjectGuidelines();
```

- *Type:* java.lang.String

---

##### `profileImageGuidelines`<sup>Required</sup> <a name="profileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines"></a>

```java
public java.lang.String getProfileImageGuidelines();
```

- *Type:* java.lang.String

---

##### `pwaDescription`<sup>Required</sup> <a name="pwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription"></a>

```java
public java.lang.String getPwaDescription();
```

- *Type:* java.lang.String

---

##### `pwaName`<sup>Required</sup> <a name="pwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName"></a>

```java
public java.lang.String getPwaName();
```

- *Type:* java.lang.String

---

##### `pwaShortName`<sup>Required</sup> <a name="pwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName"></a>

```java
public java.lang.String getPwaShortName();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationAppearanceConfig <a name="ApplicationAppearanceConfig" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.application_appearance.ApplicationAppearanceConfig;

ApplicationAppearanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .emailHeaderAndFooterEnabled(java.lang.Boolean)
//  .emailHeaderAndFooterEnabled(IResolvable)
//  .footerMessage(java.lang.String)
//  .headerMessage(java.lang.String)
//  .keepSettingsOnDestroy(java.lang.Boolean)
//  .keepSettingsOnDestroy(IResolvable)
//  .memberGuidelines(java.lang.String)
//  .messageBackgroundColor(java.lang.String)
//  .messageFontColor(java.lang.String)
//  .newProjectGuidelines(java.lang.String)
//  .profileImageGuidelines(java.lang.String)
//  .pwaDescription(java.lang.String)
//  .pwaName(java.lang.String)
//  .pwaShortName(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled">emailHeaderAndFooterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage">footerMessage</a></code> | <code>java.lang.String</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage">headerMessage</a></code> | <code>java.lang.String</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines">memberGuidelines</a></code> | <code>java.lang.String</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor">messageBackgroundColor</a></code> | <code>java.lang.String</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor">messageFontColor</a></code> | <code>java.lang.String</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines">newProjectGuidelines</a></code> | <code>java.lang.String</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines">profileImageGuidelines</a></code> | <code>java.lang.String</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription">pwaDescription</a></code> | <code>java.lang.String</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName">pwaName</a></code> | <code>java.lang.String</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName">pwaShortName</a></code> | <code>java.lang.String</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title">title</a></code> | <code>java.lang.String</code> | Application title on the sign-in and sign-up page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `emailHeaderAndFooterEnabled`<sup>Optional</sup> <a name="emailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled"></a>

```java
public java.lang.Object getEmailHeaderAndFooterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `footerMessage`<sup>Optional</sup> <a name="footerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage"></a>

```java
public java.lang.String getFooterMessage();
```

- *Type:* java.lang.String

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `headerMessage`<sup>Optional</sup> <a name="headerMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage"></a>

```java
public java.lang.String getHeaderMessage();
```

- *Type:* java.lang.String

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `keepSettingsOnDestroy`<sup>Optional</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy"></a>

```java
public java.lang.Object getKeepSettingsOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `memberGuidelines`<sup>Optional</sup> <a name="memberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines"></a>

```java
public java.lang.String getMemberGuidelines();
```

- *Type:* java.lang.String

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `messageBackgroundColor`<sup>Optional</sup> <a name="messageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor"></a>

```java
public java.lang.String getMessageBackgroundColor();
```

- *Type:* java.lang.String

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `messageFontColor`<sup>Optional</sup> <a name="messageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor"></a>

```java
public java.lang.String getMessageFontColor();
```

- *Type:* java.lang.String

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `newProjectGuidelines`<sup>Optional</sup> <a name="newProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines"></a>

```java
public java.lang.String getNewProjectGuidelines();
```

- *Type:* java.lang.String

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `profileImageGuidelines`<sup>Optional</sup> <a name="profileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines"></a>

```java
public java.lang.String getProfileImageGuidelines();
```

- *Type:* java.lang.String

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `pwaDescription`<sup>Optional</sup> <a name="pwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription"></a>

```java
public java.lang.String getPwaDescription();
```

- *Type:* java.lang.String

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `pwaName`<sup>Optional</sup> <a name="pwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName"></a>

```java
public java.lang.String getPwaName();
```

- *Type:* java.lang.String

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `pwaShortName`<sup>Optional</sup> <a name="pwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName"></a>

```java
public java.lang.String getPwaShortName();
```

- *Type:* java.lang.String

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/application_appearance#title ApplicationAppearance#title}

---



