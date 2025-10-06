# `applicationAppearance` Submodule <a name="`applicationAppearance` Submodule" id="@cdktf/provider-gitlab.applicationAppearance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationAppearance <a name="ApplicationAppearance" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance gitlab_application_appearance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import application_appearance

applicationAppearance.ApplicationAppearance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  email_header_and_footer_enabled: bool | IResolvable = None,
  footer_message: str = None,
  header_message: str = None,
  keep_settings_on_destroy: bool | IResolvable = None,
  member_guidelines: str = None,
  message_background_color: str = None,
  message_font_color: str = None,
  new_project_guidelines: str = None,
  profile_image_guidelines: str = None,
  pwa_description: str = None,
  pwa_name: str = None,
  pwa_short_name: str = None,
  title: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.description">description</a></code> | <code>str</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.emailHeaderAndFooterEnabled">email_header_and_footer_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.footerMessage">footer_message</a></code> | <code>str</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.headerMessage">header_message</a></code> | <code>str</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.keepSettingsOnDestroy">keep_settings_on_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.memberGuidelines">member_guidelines</a></code> | <code>str</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageBackgroundColor">message_background_color</a></code> | <code>str</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageFontColor">message_font_color</a></code> | <code>str</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.newProjectGuidelines">new_project_guidelines</a></code> | <code>str</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.profileImageGuidelines">profile_image_guidelines</a></code> | <code>str</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaDescription">pwa_description</a></code> | <code>str</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaName">pwa_name</a></code> | <code>str</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaShortName">pwa_short_name</a></code> | <code>str</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.title">title</a></code> | <code>str</code> | Application title on the sign-in and sign-up page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.description"></a>

- *Type:* str

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `email_header_and_footer_enabled`<sup>Optional</sup> <a name="email_header_and_footer_enabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.emailHeaderAndFooterEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `footer_message`<sup>Optional</sup> <a name="footer_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.footerMessage"></a>

- *Type:* str

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `header_message`<sup>Optional</sup> <a name="header_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.headerMessage"></a>

- *Type:* str

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `keep_settings_on_destroy`<sup>Optional</sup> <a name="keep_settings_on_destroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.keepSettingsOnDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `member_guidelines`<sup>Optional</sup> <a name="member_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.memberGuidelines"></a>

- *Type:* str

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `message_background_color`<sup>Optional</sup> <a name="message_background_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageBackgroundColor"></a>

- *Type:* str

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `message_font_color`<sup>Optional</sup> <a name="message_font_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.messageFontColor"></a>

- *Type:* str

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `new_project_guidelines`<sup>Optional</sup> <a name="new_project_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.newProjectGuidelines"></a>

- *Type:* str

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `profile_image_guidelines`<sup>Optional</sup> <a name="profile_image_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.profileImageGuidelines"></a>

- *Type:* str

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `pwa_description`<sup>Optional</sup> <a name="pwa_description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaDescription"></a>

- *Type:* str

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `pwa_name`<sup>Optional</sup> <a name="pwa_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaName"></a>

- *Type:* str

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `pwa_short_name`<sup>Optional</sup> <a name="pwa_short_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.pwaShortName"></a>

- *Type:* str

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.title"></a>

- *Type:* str

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#title ApplicationAppearance#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled">reset_email_header_and_footer_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage">reset_footer_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage">reset_header_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy">reset_keep_settings_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines">reset_member_guidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor">reset_message_background_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor">reset_message_font_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines">reset_new_project_guidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines">reset_profile_image_guidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription">reset_pwa_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName">reset_pwa_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName">reset_pwa_short_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle">reset_title</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_email_header_and_footer_enabled` <a name="reset_email_header_and_footer_enabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled"></a>

```python
def reset_email_header_and_footer_enabled() -> None
```

##### `reset_footer_message` <a name="reset_footer_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage"></a>

```python
def reset_footer_message() -> None
```

##### `reset_header_message` <a name="reset_header_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage"></a>

```python
def reset_header_message() -> None
```

##### `reset_keep_settings_on_destroy` <a name="reset_keep_settings_on_destroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy"></a>

```python
def reset_keep_settings_on_destroy() -> None
```

##### `reset_member_guidelines` <a name="reset_member_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines"></a>

```python
def reset_member_guidelines() -> None
```

##### `reset_message_background_color` <a name="reset_message_background_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor"></a>

```python
def reset_message_background_color() -> None
```

##### `reset_message_font_color` <a name="reset_message_font_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor"></a>

```python
def reset_message_font_color() -> None
```

##### `reset_new_project_guidelines` <a name="reset_new_project_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines"></a>

```python
def reset_new_project_guidelines() -> None
```

##### `reset_profile_image_guidelines` <a name="reset_profile_image_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines"></a>

```python
def reset_profile_image_guidelines() -> None
```

##### `reset_pwa_description` <a name="reset_pwa_description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription"></a>

```python
def reset_pwa_description() -> None
```

##### `reset_pwa_name` <a name="reset_pwa_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName"></a>

```python
def reset_pwa_name() -> None
```

##### `reset_pwa_short_name` <a name="reset_pwa_short_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName"></a>

```python
def reset_pwa_short_name() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle"></a>

```python
def reset_title() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import application_appearance

applicationAppearance.ApplicationAppearance.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import application_appearance

applicationAppearance.ApplicationAppearance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import application_appearance

applicationAppearance.ApplicationAppearance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import application_appearance

applicationAppearance.ApplicationAppearance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationAppearance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationAppearance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationAppearance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput">email_header_and_footer_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput">footer_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput">header_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput">keep_settings_on_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput">member_guidelines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput">message_background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput">message_font_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput">new_project_guidelines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput">profile_image_guidelines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput">pwa_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput">pwa_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput">pwa_short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled">email_header_and_footer_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage">footer_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage">header_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy">keep_settings_on_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines">member_guidelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor">message_background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor">message_font_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines">new_project_guidelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines">profile_image_guidelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription">pwa_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName">pwa_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName">pwa_short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_header_and_footer_enabled_input`<sup>Optional</sup> <a name="email_header_and_footer_enabled_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput"></a>

```python
email_header_and_footer_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `footer_message_input`<sup>Optional</sup> <a name="footer_message_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput"></a>

```python
footer_message_input: str
```

- *Type:* str

---

##### `header_message_input`<sup>Optional</sup> <a name="header_message_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput"></a>

```python
header_message_input: str
```

- *Type:* str

---

##### `keep_settings_on_destroy_input`<sup>Optional</sup> <a name="keep_settings_on_destroy_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput"></a>

```python
keep_settings_on_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `member_guidelines_input`<sup>Optional</sup> <a name="member_guidelines_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput"></a>

```python
member_guidelines_input: str
```

- *Type:* str

---

##### `message_background_color_input`<sup>Optional</sup> <a name="message_background_color_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput"></a>

```python
message_background_color_input: str
```

- *Type:* str

---

##### `message_font_color_input`<sup>Optional</sup> <a name="message_font_color_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput"></a>

```python
message_font_color_input: str
```

- *Type:* str

---

##### `new_project_guidelines_input`<sup>Optional</sup> <a name="new_project_guidelines_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput"></a>

```python
new_project_guidelines_input: str
```

- *Type:* str

---

##### `profile_image_guidelines_input`<sup>Optional</sup> <a name="profile_image_guidelines_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput"></a>

```python
profile_image_guidelines_input: str
```

- *Type:* str

---

##### `pwa_description_input`<sup>Optional</sup> <a name="pwa_description_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput"></a>

```python
pwa_description_input: str
```

- *Type:* str

---

##### `pwa_name_input`<sup>Optional</sup> <a name="pwa_name_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput"></a>

```python
pwa_name_input: str
```

- *Type:* str

---

##### `pwa_short_name_input`<sup>Optional</sup> <a name="pwa_short_name_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput"></a>

```python
pwa_short_name_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email_header_and_footer_enabled`<sup>Required</sup> <a name="email_header_and_footer_enabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled"></a>

```python
email_header_and_footer_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `footer_message`<sup>Required</sup> <a name="footer_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage"></a>

```python
footer_message: str
```

- *Type:* str

---

##### `header_message`<sup>Required</sup> <a name="header_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage"></a>

```python
header_message: str
```

- *Type:* str

---

##### `keep_settings_on_destroy`<sup>Required</sup> <a name="keep_settings_on_destroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy"></a>

```python
keep_settings_on_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `member_guidelines`<sup>Required</sup> <a name="member_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines"></a>

```python
member_guidelines: str
```

- *Type:* str

---

##### `message_background_color`<sup>Required</sup> <a name="message_background_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor"></a>

```python
message_background_color: str
```

- *Type:* str

---

##### `message_font_color`<sup>Required</sup> <a name="message_font_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor"></a>

```python
message_font_color: str
```

- *Type:* str

---

##### `new_project_guidelines`<sup>Required</sup> <a name="new_project_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines"></a>

```python
new_project_guidelines: str
```

- *Type:* str

---

##### `profile_image_guidelines`<sup>Required</sup> <a name="profile_image_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines"></a>

```python
profile_image_guidelines: str
```

- *Type:* str

---

##### `pwa_description`<sup>Required</sup> <a name="pwa_description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription"></a>

```python
pwa_description: str
```

- *Type:* str

---

##### `pwa_name`<sup>Required</sup> <a name="pwa_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName"></a>

```python
pwa_name: str
```

- *Type:* str

---

##### `pwa_short_name`<sup>Required</sup> <a name="pwa_short_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName"></a>

```python
pwa_short_name: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationAppearanceConfig <a name="ApplicationAppearanceConfig" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import application_appearance

applicationAppearance.ApplicationAppearanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  email_header_and_footer_enabled: bool | IResolvable = None,
  footer_message: str = None,
  header_message: str = None,
  keep_settings_on_destroy: bool | IResolvable = None,
  member_guidelines: str = None,
  message_background_color: str = None,
  message_font_color: str = None,
  new_project_guidelines: str = None,
  profile_image_guidelines: str = None,
  pwa_description: str = None,
  pwa_name: str = None,
  pwa_short_name: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description">description</a></code> | <code>str</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled">email_header_and_footer_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage">footer_message</a></code> | <code>str</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage">header_message</a></code> | <code>str</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy">keep_settings_on_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines">member_guidelines</a></code> | <code>str</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor">message_background_color</a></code> | <code>str</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor">message_font_color</a></code> | <code>str</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines">new_project_guidelines</a></code> | <code>str</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines">profile_image_guidelines</a></code> | <code>str</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription">pwa_description</a></code> | <code>str</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName">pwa_name</a></code> | <code>str</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName">pwa_short_name</a></code> | <code>str</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title">title</a></code> | <code>str</code> | Application title on the sign-in and sign-up page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `email_header_and_footer_enabled`<sup>Optional</sup> <a name="email_header_and_footer_enabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled"></a>

```python
email_header_and_footer_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `footer_message`<sup>Optional</sup> <a name="footer_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage"></a>

```python
footer_message: str
```

- *Type:* str

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `header_message`<sup>Optional</sup> <a name="header_message" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage"></a>

```python
header_message: str
```

- *Type:* str

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `keep_settings_on_destroy`<sup>Optional</sup> <a name="keep_settings_on_destroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy"></a>

```python
keep_settings_on_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `member_guidelines`<sup>Optional</sup> <a name="member_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines"></a>

```python
member_guidelines: str
```

- *Type:* str

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `message_background_color`<sup>Optional</sup> <a name="message_background_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor"></a>

```python
message_background_color: str
```

- *Type:* str

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `message_font_color`<sup>Optional</sup> <a name="message_font_color" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor"></a>

```python
message_font_color: str
```

- *Type:* str

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `new_project_guidelines`<sup>Optional</sup> <a name="new_project_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines"></a>

```python
new_project_guidelines: str
```

- *Type:* str

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `profile_image_guidelines`<sup>Optional</sup> <a name="profile_image_guidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines"></a>

```python
profile_image_guidelines: str
```

- *Type:* str

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `pwa_description`<sup>Optional</sup> <a name="pwa_description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription"></a>

```python
pwa_description: str
```

- *Type:* str

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `pwa_name`<sup>Optional</sup> <a name="pwa_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName"></a>

```python
pwa_name: str
```

- *Type:* str

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `pwa_short_name`<sup>Optional</sup> <a name="pwa_short_name" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName"></a>

```python
pwa_short_name: str
```

- *Type:* str

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/application_appearance#title ApplicationAppearance#title}

---



