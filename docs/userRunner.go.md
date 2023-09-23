# `gitlab_user_runner`

Refer to the Terraform Registory for docs: [`gitlab_user_runner`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner).

# `userRunner` Submodule <a name="`userRunner` Submodule" id="@cdktf/provider-gitlab.userRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserRunner <a name="UserRunner" id="@cdktf/provider-gitlab.userRunner.UserRunner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner gitlab_user_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v10/userrunner"

userrunner.NewUserRunner(scope Construct, id *string, config UserRunnerConfig) UserRunner
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig">UserRunnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig">UserRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked">ResetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout">ResetMaximumTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList">ResetTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged">ResetUntagged</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.userRunner.UserRunner.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked"></a>

```go
func ResetLocked()
```

##### `ResetMaximumTimeout` <a name="ResetMaximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout"></a>

```go
func ResetMaximumTimeout()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused"></a>

```go
func ResetPaused()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTagList` <a name="ResetTagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList"></a>

```go
func ResetTagList()
```

##### `ResetUntagged` <a name="ResetUntagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged"></a>

```go
func ResetUntagged()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v10/userrunner"

userrunner.UserRunner_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v10/userrunner"

userrunner.UserRunner_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v10/userrunner"

userrunner.UserRunner_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput">LockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput">MaximumTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput">PausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput">ProjectIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput">RunnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput">TagListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput">UntaggedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.locked">Locked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout">MaximumTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.paused">Paused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId">ProjectId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType">RunnerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList">TagList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged">Untagged</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput"></a>

```go
func LockedInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumTimeoutInput`<sup>Optional</sup> <a name="MaximumTimeoutInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput"></a>

```go
func MaximumTimeoutInput() *f64
```

- *Type:* *f64

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput"></a>

```go
func PausedInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput"></a>

```go
func ProjectIdInput() *f64
```

- *Type:* *f64

---

##### `RunnerTypeInput`<sup>Optional</sup> <a name="RunnerTypeInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput"></a>

```go
func RunnerTypeInput() *string
```

- *Type:* *string

---

##### `TagListInput`<sup>Optional</sup> <a name="TagListInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput"></a>

```go
func TagListInput() *[]*string
```

- *Type:* *[]*string

---

##### `UntaggedInput`<sup>Optional</sup> <a name="UntaggedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput"></a>

```go
func UntaggedInput() interface{}
```

- *Type:* interface{}

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.locked"></a>

```go
func Locked() interface{}
```

- *Type:* interface{}

---

##### `MaximumTimeout`<sup>Required</sup> <a name="MaximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout"></a>

```go
func MaximumTimeout() *f64
```

- *Type:* *f64

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.paused"></a>

```go
func Paused() interface{}
```

- *Type:* interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId"></a>

```go
func ProjectId() *f64
```

- *Type:* *f64

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType"></a>

```go
func RunnerType() *string
```

- *Type:* *string

---

##### `TagList`<sup>Required</sup> <a name="TagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList"></a>

```go
func TagList() *[]*string
```

- *Type:* *[]*string

---

##### `Untagged`<sup>Required</sup> <a name="Untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged"></a>

```go
func Untagged() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserRunnerConfig <a name="UserRunnerConfig" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v10/userrunner"

&userrunner.UserRunnerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RunnerType: *string,
	AccessLevel: *string,
	Description: *string,
	GroupId: *f64,
	Locked: interface{},
	MaximumTimeout: *f64,
	Paused: interface{},
	ProjectId: *f64,
	TagList: *[]*string,
	Untagged: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType">RunnerType</a></code> | <code>*string</code> | The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | The access level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description">Description</a></code> | <code>*string</code> | Description of the runner. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of the group that the runner is created in. Required if runner_type is group_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked">Locked</a></code> | <code>interface{}</code> | Specifies if the runner should be locked for the current project. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout">MaximumTimeout</a></code> | <code>*f64</code> | Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused">Paused</a></code> | <code>interface{}</code> | Specifies if the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId">ProjectId</a></code> | <code>*f64</code> | The ID of the project that the runner is created in. Required if runner_type is project_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList">TagList</a></code> | <code>*[]*string</code> | A list of runner tags. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged">Untagged</a></code> | <code>interface{}</code> | Specifies if the runner should handle untagged jobs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType"></a>

```go
RunnerType *string
```

- *Type:* *string

The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#runner_type UserRunner#runner_type}

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

The access level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#access_level UserRunner#access_level}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#description UserRunner#description}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of the group that the runner is created in. Required if runner_type is group_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#group_id UserRunner#group_id}

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked"></a>

```go
Locked interface{}
```

- *Type:* interface{}

Specifies if the runner should be locked for the current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#locked UserRunner#locked}

---

##### `MaximumTimeout`<sup>Optional</sup> <a name="MaximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout"></a>

```go
MaximumTimeout *f64
```

- *Type:* *f64

Maximum timeout that limits the amount of time (in seconds) that runners can run jobs.

Must be at least 600 (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused"></a>

```go
Paused interface{}
```

- *Type:* interface{}

Specifies if the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#paused UserRunner#paused}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId"></a>

```go
ProjectId *f64
```

- *Type:* *f64

The ID of the project that the runner is created in. Required if runner_type is project_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#project_id UserRunner#project_id}

---

##### `TagList`<sup>Optional</sup> <a name="TagList" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList"></a>

```go
TagList *[]*string
```

- *Type:* *[]*string

A list of runner tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#tag_list UserRunner#tag_list}

---

##### `Untagged`<sup>Optional</sup> <a name="Untagged" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged"></a>

```go
Untagged interface{}
```

- *Type:* interface{}

Specifies if the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user_runner#untagged UserRunner#untagged}

---



