# `gitlab_user`

Refer to the Terraform Registory for docs: [`gitlab_user`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-gitlab.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-gitlab.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user gitlab_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.user.User.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v9/user"

user.NewUser(scope Construct, id *string, config UserConfig) User
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetCanCreateGroup">ResetCanCreateGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsAdmin">ResetIsAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsExternal">ResetIsExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNote">ResetNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetProjectsLimit">ResetProjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetResetPassword">ResetResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetSkipConfirmation">ResetSkipConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetTfPassword">ResetTfPassword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.user.User.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.user.User.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.user.User.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.user.User.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.user.User.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.user.User.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.user.User.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCanCreateGroup` <a name="ResetCanCreateGroup" id="@cdktf/provider-gitlab.user.User.resetCanCreateGroup"></a>

```go
func ResetCanCreateGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.user.User.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAdmin` <a name="ResetIsAdmin" id="@cdktf/provider-gitlab.user.User.resetIsAdmin"></a>

```go
func ResetIsAdmin()
```

##### `ResetIsExternal` <a name="ResetIsExternal" id="@cdktf/provider-gitlab.user.User.resetIsExternal"></a>

```go
func ResetIsExternal()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-gitlab.user.User.resetNamespaceId"></a>

```go
func ResetNamespaceId()
```

##### `ResetNote` <a name="ResetNote" id="@cdktf/provider-gitlab.user.User.resetNote"></a>

```go
func ResetNote()
```

##### `ResetProjectsLimit` <a name="ResetProjectsLimit" id="@cdktf/provider-gitlab.user.User.resetProjectsLimit"></a>

```go
func ResetProjectsLimit()
```

##### `ResetResetPassword` <a name="ResetResetPassword" id="@cdktf/provider-gitlab.user.User.resetResetPassword"></a>

```go
func ResetResetPassword()
```

##### `ResetSkipConfirmation` <a name="ResetSkipConfirmation" id="@cdktf/provider-gitlab.user.User.resetSkipConfirmation"></a>

```go
func ResetSkipConfirmation()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-gitlab.user.User.resetState"></a>

```go
func ResetState()
```

##### `ResetTfPassword` <a name="ResetTfPassword" id="@cdktf/provider-gitlab.user.User.resetTfPassword"></a>

```go
func ResetTfPassword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.user.User.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v9/user"

user.User_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.user.User.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v9/user"

user.User_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.user.User.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v9/user"

user.User_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.user.User.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroupInput">CanCreateGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdminInput">IsAdminInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternalInput">IsExternalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.noteInput">NoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimitInput">ProjectsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPasswordInput">ResetPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmationInput">SkipConfirmationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroup">CanCreateGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdmin">IsAdmin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternal">IsExternal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceId">NamespaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.note">Note</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimit">ProjectsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPassword">ResetPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmation">SkipConfirmation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.user.User.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.user.User.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.user.User.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.user.User.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.user.User.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.user.User.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.user.User.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.user.User.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.user.User.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.user.User.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.user.User.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.user.User.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.user.User.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanCreateGroupInput`<sup>Optional</sup> <a name="CanCreateGroupInput" id="@cdktf/provider-gitlab.user.User.property.canCreateGroupInput"></a>

```go
func CanCreateGroupInput() interface{}
```

- *Type:* interface{}

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-gitlab.user.User.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.user.User.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAdminInput`<sup>Optional</sup> <a name="IsAdminInput" id="@cdktf/provider-gitlab.user.User.property.isAdminInput"></a>

```go
func IsAdminInput() interface{}
```

- *Type:* interface{}

---

##### `IsExternalInput`<sup>Optional</sup> <a name="IsExternalInput" id="@cdktf/provider-gitlab.user.User.property.isExternalInput"></a>

```go
func IsExternalInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.user.User.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-gitlab.user.User.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *f64
```

- *Type:* *f64

---

##### `NoteInput`<sup>Optional</sup> <a name="NoteInput" id="@cdktf/provider-gitlab.user.User.property.noteInput"></a>

```go
func NoteInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.user.User.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProjectsLimitInput`<sup>Optional</sup> <a name="ProjectsLimitInput" id="@cdktf/provider-gitlab.user.User.property.projectsLimitInput"></a>

```go
func ProjectsLimitInput() *f64
```

- *Type:* *f64

---

##### `ResetPasswordInput`<sup>Optional</sup> <a name="ResetPasswordInput" id="@cdktf/provider-gitlab.user.User.property.resetPasswordInput"></a>

```go
func ResetPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `SkipConfirmationInput`<sup>Optional</sup> <a name="SkipConfirmationInput" id="@cdktf/provider-gitlab.user.User.property.skipConfirmationInput"></a>

```go
func SkipConfirmationInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-gitlab.user.User.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.user.User.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CanCreateGroup`<sup>Required</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.user.User.property.canCreateGroup"></a>

```go
func CanCreateGroup() interface{}
```

- *Type:* interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.user.User.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.user.User.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-gitlab.user.User.property.isAdmin"></a>

```go
func IsAdmin() interface{}
```

- *Type:* interface{}

---

##### `IsExternal`<sup>Required</sup> <a name="IsExternal" id="@cdktf/provider-gitlab.user.User.property.isExternal"></a>

```go
func IsExternal() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.user.User.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.user.User.property.namespaceId"></a>

```go
func NamespaceId() *f64
```

- *Type:* *f64

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-gitlab.user.User.property.note"></a>

```go
func Note() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.user.User.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProjectsLimit`<sup>Required</sup> <a name="ProjectsLimit" id="@cdktf/provider-gitlab.user.User.property.projectsLimit"></a>

```go
func ProjectsLimit() *f64
```

- *Type:* *f64

---

##### `ResetPassword`<sup>Required</sup> <a name="ResetPassword" id="@cdktf/provider-gitlab.user.User.property.resetPassword"></a>

```go
func ResetPassword() interface{}
```

- *Type:* interface{}

---

##### `SkipConfirmation`<sup>Required</sup> <a name="SkipConfirmation" id="@cdktf/provider-gitlab.user.User.property.skipConfirmation"></a>

```go
func SkipConfirmation() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.user.User.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.user.User.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.user.User.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-gitlab.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.user.UserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v9/user"

&user.UserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	Name: *string,
	Username: *string,
	CanCreateGroup: interface{},
	Id: *string,
	IsAdmin: interface{},
	IsExternal: interface{},
	NamespaceId: *f64,
	Note: *string,
	Password: *string,
	ProjectsLimit: *f64,
	ResetPassword: interface{},
	SkipConfirmation: interface{},
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.email">Email</a></code> | <code>*string</code> | The e-mail address of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.name">Name</a></code> | <code>*string</code> | The name of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.username">Username</a></code> | <code>*string</code> | The username of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup">CanCreateGroup</a></code> | <code>interface{}</code> | Boolean, defaults to false. Whether to allow the user to create groups. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isAdmin">IsAdmin</a></code> | <code>interface{}</code> | Boolean, defaults to false.  Whether to enable administrative privileges. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isExternal">IsExternal</a></code> | <code>interface{}</code> | Boolean, defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.namespaceId">NamespaceId</a></code> | <code>*f64</code> | The ID of the user's namespace. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.note">Note</a></code> | <code>*string</code> | The note associated to the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.password">Password</a></code> | <code>*string</code> | The password of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit">ProjectsLimit</a></code> | <code>*f64</code> | Integer, defaults to 0.  Number of projects user can create. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.resetPassword">ResetPassword</a></code> | <code>interface{}</code> | Boolean, defaults to false. Send user password reset link. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation">SkipConfirmation</a></code> | <code>interface{}</code> | Boolean, defaults to true. Whether to skip confirmation. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.state">State</a></code> | <code>*string</code> | String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.user.UserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.user.UserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.user.UserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.user.UserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.user.UserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.user.UserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.user.UserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.user.UserConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The e-mail address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#email User#email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.user.UserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#name User#name}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.user.UserConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#username User#username}

---

##### `CanCreateGroup`<sup>Optional</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup"></a>

```go
CanCreateGroup interface{}
```

- *Type:* interface{}

Boolean, defaults to false. Whether to allow the user to create groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#can_create_group User#can_create_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.user.UserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAdmin`<sup>Optional</sup> <a name="IsAdmin" id="@cdktf/provider-gitlab.user.UserConfig.property.isAdmin"></a>

```go
IsAdmin interface{}
```

- *Type:* interface{}

Boolean, defaults to false.  Whether to enable administrative privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#is_admin User#is_admin}

---

##### `IsExternal`<sup>Optional</sup> <a name="IsExternal" id="@cdktf/provider-gitlab.user.UserConfig.property.isExternal"></a>

```go
IsExternal interface{}
```

- *Type:* interface{}

Boolean, defaults to false.

Whether a user has access only to some internal or private projects. External users can only access projects to which they are explicitly granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#is_external User#is_external}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.user.UserConfig.property.namespaceId"></a>

```go
NamespaceId *f64
```

- *Type:* *f64

The ID of the user's namespace. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#namespace_id User#namespace_id}

---

##### `Note`<sup>Optional</sup> <a name="Note" id="@cdktf/provider-gitlab.user.UserConfig.property.note"></a>

```go
Note *string
```

- *Type:* *string

The note associated to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#note User#note}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-gitlab.user.UserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#password User#password}

---

##### `ProjectsLimit`<sup>Optional</sup> <a name="ProjectsLimit" id="@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit"></a>

```go
ProjectsLimit *f64
```

- *Type:* *f64

Integer, defaults to 0.  Number of projects user can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#projects_limit User#projects_limit}

---

##### `ResetPassword`<sup>Optional</sup> <a name="ResetPassword" id="@cdktf/provider-gitlab.user.UserConfig.property.resetPassword"></a>

```go
ResetPassword interface{}
```

- *Type:* interface{}

Boolean, defaults to false. Send user password reset link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#reset_password User#reset_password}

---

##### `SkipConfirmation`<sup>Optional</sup> <a name="SkipConfirmation" id="@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation"></a>

```go
SkipConfirmation interface{}
```

- *Type:* interface{}

Boolean, defaults to true. Whether to skip confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#skip_confirmation User#skip_confirmation}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-gitlab.user.UserConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/user#state User#state}

---



