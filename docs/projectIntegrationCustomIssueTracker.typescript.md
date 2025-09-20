# `projectIntegrationCustomIssueTracker` Submodule <a name="`projectIntegrationCustomIssueTracker` Submodule" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationCustomIssueTracker <a name="ProjectIntegrationCustomIssueTracker" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker gitlab_project_integration_custom_issue_tracker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer"></a>

```typescript
import { projectIntegrationCustomIssueTracker } from '@cdktf/provider-gitlab'

new projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker(scope: Construct, id: string, config: ProjectIntegrationCustomIssueTrackerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig">ProjectIntegrationCustomIssueTrackerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig">ProjectIntegrationCustomIssueTrackerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct"></a>

```typescript
import { projectIntegrationCustomIssueTracker } from '@cdktf/provider-gitlab'

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement"></a>

```typescript
import { projectIntegrationCustomIssueTracker } from '@cdktf/provider-gitlab'

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource"></a>

```typescript
import { projectIntegrationCustomIssueTracker } from '@cdktf/provider-gitlab'

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport"></a>

```typescript
import { projectIntegrationCustomIssueTracker } from '@cdktf/provider-gitlab'

projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectIntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationCustomIssueTracker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationCustomIssueTracker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationCustomIssueTracker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrlInput">issuesUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrlInput">projectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrl">issuesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrl">projectUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `issuesUrlInput`<sup>Optional</sup> <a name="issuesUrlInput" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrlInput"></a>

```typescript
public readonly issuesUrlInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `projectUrlInput`<sup>Optional</sup> <a name="projectUrlInput" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrlInput"></a>

```typescript
public readonly projectUrlInput: string;
```

- *Type:* string

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrl"></a>

```typescript
public readonly issuesUrl: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrl"></a>

```typescript
public readonly projectUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationCustomIssueTrackerConfig <a name="ProjectIntegrationCustomIssueTrackerConfig" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.Initializer"></a>

```typescript
import { projectIntegrationCustomIssueTracker } from '@cdktf/provider-gitlab'

const projectIntegrationCustomIssueTrackerConfig: projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.issuesUrl">issuesUrl</a></code> | <code>string</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.project">project</a></code> | <code>string</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.projectUrl">projectUrl</a></code> | <code>string</code> | The URL to the project in the external issue tracker. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.issuesUrl"></a>

```typescript
public readonly issuesUrl: string;
```

- *Type:* string

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#issues_url ProjectIntegrationCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#project ProjectIntegrationCustomIssueTracker#project}

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.projectUrl"></a>

```typescript
public readonly projectUrl: string;
```

- *Type:* string

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#project_url ProjectIntegrationCustomIssueTracker#project_url}

---



