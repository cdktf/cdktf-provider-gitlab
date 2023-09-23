# `gitlab_project_issue_board`

Refer to the Terraform Registory for docs: [`gitlab_project_issue_board`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board).

# `projectIssueBoard` Submodule <a name="`projectIssueBoard` Submodule" id="@cdktf/provider-gitlab.projectIssueBoard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssueBoard <a name="ProjectIssueBoard" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board gitlab_project_issue_board}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

projectissueboard.NewProjectIssueBoard(scope Construct, id *string, config ProjectIssueBoardConfig) ProjectIssueBoard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig">ProjectIssueBoardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig">ProjectIssueBoardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists">PutLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists">ResetLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLists` <a name="PutLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists"></a>

```go
func PutLists(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId"></a>

```go
func ResetAssigneeId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLists` <a name="ResetLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists"></a>

```go
func ResetLists()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId"></a>

```go
func ResetMilestoneId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight"></a>

```go
func ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

projectissueboard.ProjectIssueBoard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

projectissueboard.ProjectIssueBoard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

projectissueboard.ProjectIssueBoard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists">Lists</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput">ListsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId">AssigneeId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Lists`<sup>Required</sup> <a name="Lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists"></a>

```go
func Lists() ProjectIssueBoardListsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a>

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput"></a>

```go
func AssigneeIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListsInput`<sup>Optional</sup> <a name="ListsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput"></a>

```go
func ListsInput() interface{}
```

- *Type:* interface{}

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput"></a>

```go
func MilestoneIdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId"></a>

```go
func AssigneeId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId"></a>

```go
func MilestoneId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueBoardConfig <a name="ProjectIssueBoardConfig" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

&projectissueboard.ProjectIssueBoardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	AssigneeId: *f64,
	Id: *string,
	Labels: *[]*string,
	Lists: interface{},
	MilestoneId: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name">Name</a></code> | <code>*string</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId">AssigneeId</a></code> | <code>*f64</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists">Lists</a></code> | <code>interface{}</code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight">Weight</a></code> | <code>*f64</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId"></a>

```go
AssigneeId *f64
```

- *Type:* *f64

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `Lists`<sup>Optional</sup> <a name="Lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists"></a>

```go
Lists interface{}
```

- *Type:* interface{}

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId"></a>

```go
MilestoneId *f64
```

- *Type:* *f64

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

### ProjectIssueBoardLists <a name="ProjectIssueBoardLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

&projectissueboard.ProjectIssueBoardLists {
	AssigneeId: *f64,
	IterationId: *f64,
	LabelId: *f64,
	MilestoneId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId">AssigneeId</a></code> | <code>*f64</code> | The ID of the assignee the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId">IterationId</a></code> | <code>*f64</code> | The ID of the iteration the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId">LabelId</a></code> | <code>*f64</code> | The ID of the label the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | The ID of the milestone the list should be scoped to. Requires a GitLab EE license. |

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId"></a>

```go
AssigneeId *f64
```

- *Type:* *f64

The ID of the assignee the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `IterationId`<sup>Optional</sup> <a name="IterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId"></a>

```go
IterationId *f64
```

- *Type:* *f64

The ID of the iteration the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#iteration_id ProjectIssueBoard#iteration_id}

---

##### `LabelId`<sup>Optional</sup> <a name="LabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId"></a>

```go
LabelId *f64
```

- *Type:* *f64

The ID of the label the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#label_id ProjectIssueBoard#label_id}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId"></a>

```go
MilestoneId *f64
```

- *Type:* *f64

The ID of the milestone the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueBoardListsList <a name="ProjectIssueBoardListsList" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

projectissueboard.NewProjectIssueBoardListsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ProjectIssueBoardListsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get"></a>

```go
func Get(index *f64) ProjectIssueBoardListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ProjectIssueBoardListsOutputReference <a name="ProjectIssueBoardListsOutputReference" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectissueboard"

projectissueboard.NewProjectIssueBoardListsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ProjectIssueBoardListsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId">ResetIterationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId">ResetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId"></a>

```go
func ResetAssigneeId()
```

##### `ResetIterationId` <a name="ResetIterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId"></a>

```go
func ResetIterationId()
```

##### `ResetLabelId` <a name="ResetLabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId"></a>

```go
func ResetLabelId()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId"></a>

```go
func ResetMilestoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput">IterationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput">LabelIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId">AssigneeId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId">IterationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId">LabelId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId">MilestoneId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput"></a>

```go
func AssigneeIdInput() *f64
```

- *Type:* *f64

---

##### `IterationIdInput`<sup>Optional</sup> <a name="IterationIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput"></a>

```go
func IterationIdInput() *f64
```

- *Type:* *f64

---

##### `LabelIdInput`<sup>Optional</sup> <a name="LabelIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput"></a>

```go
func LabelIdInput() *f64
```

- *Type:* *f64

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput"></a>

```go
func MilestoneIdInput() *f64
```

- *Type:* *f64

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId"></a>

```go
func AssigneeId() *f64
```

- *Type:* *f64

---

##### `IterationId`<sup>Required</sup> <a name="IterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId"></a>

```go
func IterationId() *f64
```

- *Type:* *f64

---

##### `LabelId`<sup>Required</sup> <a name="LabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId"></a>

```go
func LabelId() *f64
```

- *Type:* *f64

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId"></a>

```go
func MilestoneId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



