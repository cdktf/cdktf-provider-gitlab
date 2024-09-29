# `branch` Submodule <a name="`branch` Submodule" id="@cdktf/provider-gitlab.branch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Branch <a name="Branch" id="@cdktf/provider-gitlab.branch.Branch"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch gitlab_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branch.Branch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.NewBranch(scope Construct, id *string, config BranchConfig) Branch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig">BranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branch.Branch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branch.Branch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.branch.Branch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.branch.BranchConfig">BranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branch.Branch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.branch.Branch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.branch.Branch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branch.Branch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.branch.Branch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.branch.Branch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.branch.Branch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.branch.Branch.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.branch.Branch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.branch.Branch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.branch.Branch.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branch.Branch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branch.Branch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branch.Branch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branch.Branch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branch.Branch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branch.Branch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branch.Branch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branch.Branch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branch.Branch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branch.Branch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.branch.Branch.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.branch.Branch.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branch.Branch.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branch.Branch.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branch.Branch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.Branch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.branch.Branch.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branch.Branch.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.branch.Branch.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branch.Branch.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.branch.Branch.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.branch.Branch.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branch.Branch.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.branch.Branch.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.branch.Branch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.Branch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branch.Branch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.branch.Branch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.Branch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branch.Branch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.branch.Branch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.Branch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branch.Branch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.branch.Branch.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.Branch_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Branch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branch.Branch.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.branch.Branch.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Branch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.branch.Branch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Branch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branch.Branch.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Branch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.canPush">CanPush</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.commit">Commit</a></code> | <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList">BranchCommitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.developerCanMerge">DeveloperCanMerge</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.developerCanPush">DeveloperCanPush</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.merged">Merged</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.protected">Protected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.branch.Branch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.branch.Branch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branch.Branch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.branch.Branch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.branch.Branch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.branch.Branch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.branch.Branch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.branch.Branch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.branch.Branch.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.branch.Branch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.branch.Branch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.branch.Branch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branch.Branch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.branch.Branch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CanPush`<sup>Required</sup> <a name="CanPush" id="@cdktf/provider-gitlab.branch.Branch.property.canPush"></a>

```go
func CanPush() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktf/provider-gitlab.branch.Branch.property.commit"></a>

```go
func Commit() BranchCommitList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branch.BranchCommitList">BranchCommitList</a>

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-gitlab.branch.Branch.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeveloperCanMerge`<sup>Required</sup> <a name="DeveloperCanMerge" id="@cdktf/provider-gitlab.branch.Branch.property.developerCanMerge"></a>

```go
func DeveloperCanMerge() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeveloperCanPush`<sup>Required</sup> <a name="DeveloperCanPush" id="@cdktf/provider-gitlab.branch.Branch.property.developerCanPush"></a>

```go
func DeveloperCanPush() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Merged`<sup>Required</sup> <a name="Merged" id="@cdktf/provider-gitlab.branch.Branch.property.merged"></a>

```go
func Merged() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-gitlab.branch.Branch.property.protected"></a>

```go
func Protected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.branch.Branch.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.branch.Branch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.branch.Branch.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.branch.Branch.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-gitlab.branch.Branch.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branch.Branch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.branch.Branch.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.branch.Branch.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.branch.Branch.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.Branch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.branch.Branch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchCommit <a name="BranchCommit" id="@cdktf/provider-gitlab.branch.BranchCommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branch.BranchCommit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

&branch.BranchCommit {

}
```


### BranchConfig <a name="BranchConfig" id="@cdktf/provider-gitlab.branch.BranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branch.BranchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

&branch.BranchConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	Ref: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.name">Name</a></code> | <code>*string</code> | The name for this branch. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project which the branch is created against. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.ref">Ref</a></code> | <code>*string</code> | The ref which the branch is created from. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch#id Branch#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.branch.BranchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.branch.BranchConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.branch.BranchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.branch.BranchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.branch.BranchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branch.BranchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.branch.BranchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.branch.BranchConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch#name Branch#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.branch.BranchConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project which the branch is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch#project Branch#project}

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.branch.BranchConfig.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

The ref which the branch is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch#ref Branch#ref}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.branch.BranchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/branch#id Branch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### BranchCommitList <a name="BranchCommitList" id="@cdktf/provider-gitlab.branch.BranchCommitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branch.BranchCommitList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.NewBranchCommitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BranchCommitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branch.BranchCommitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branch.BranchCommitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branch.BranchCommitList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branch.BranchCommitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branch.BranchCommitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branch.BranchCommitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branch.BranchCommitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branch.BranchCommitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branch.BranchCommitList.get"></a>

```go
func Get(index *f64) BranchCommitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branch.BranchCommitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branch.BranchCommitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branch.BranchCommitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BranchCommitOutputReference <a name="BranchCommitOutputReference" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branch"

branch.NewBranchCommitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BranchCommitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.authoredDate">AuthoredDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.authorEmail">AuthorEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.authorName">AuthorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.committedDate">CommittedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.committerEmail">CommitterEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.committerName">CommitterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.parentIds">ParentIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.shortId">ShortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.branch.BranchCommit">BranchCommit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthoredDate`<sup>Required</sup> <a name="AuthoredDate" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.authoredDate"></a>

```go
func AuthoredDate() *string
```

- *Type:* *string

---

##### `AuthorEmail`<sup>Required</sup> <a name="AuthorEmail" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.authorEmail"></a>

```go
func AuthorEmail() *string
```

- *Type:* *string

---

##### `AuthorName`<sup>Required</sup> <a name="AuthorName" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.authorName"></a>

```go
func AuthorName() *string
```

- *Type:* *string

---

##### `CommittedDate`<sup>Required</sup> <a name="CommittedDate" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.committedDate"></a>

```go
func CommittedDate() *string
```

- *Type:* *string

---

##### `CommitterEmail`<sup>Required</sup> <a name="CommitterEmail" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.committerEmail"></a>

```go
func CommitterEmail() *string
```

- *Type:* *string

---

##### `CommitterName`<sup>Required</sup> <a name="CommitterName" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.committerName"></a>

```go
func CommitterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `ParentIds`<sup>Required</sup> <a name="ParentIds" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.parentIds"></a>

```go
func ParentIds() *[]*string
```

- *Type:* *[]*string

---

##### `ShortId`<sup>Required</sup> <a name="ShortId" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.shortId"></a>

```go
func ShortId() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branch.BranchCommitOutputReference.property.internalValue"></a>

```go
func InternalValue() BranchCommit
```

- *Type:* <a href="#@cdktf/provider-gitlab.branch.BranchCommit">BranchCommit</a>

---



