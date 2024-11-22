# `projectJobTokenScopes` Submodule <a name="`projectJobTokenScopes` Submodule" id="@cdktf/provider-gitlab.projectJobTokenScopes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectJobTokenScopes <a name="ProjectJobTokenScopes" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_job_token_scopes gitlab_project_job_token_scopes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer"></a>

```typescript
import { projectJobTokenScopes } from '@cdktf/provider-gitlab'

new projectJobTokenScopes.ProjectJobTokenScopes(scope: Construct, id: string, config?: ProjectJobTokenScopesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig">ProjectJobTokenScopesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig">ProjectJobTokenScopesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetGroupIds">resetTargetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetProjectIds">resetTargetProjectIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProject` <a name="resetProject" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTargetGroupIds` <a name="resetTargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetGroupIds"></a>

```typescript
public resetTargetGroupIds(): void
```

##### `resetTargetProjectIds` <a name="resetTargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetProjectIds"></a>

```typescript
public resetTargetProjectIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct"></a>

```typescript
import { projectJobTokenScopes } from '@cdktf/provider-gitlab'

projectJobTokenScopes.ProjectJobTokenScopes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement"></a>

```typescript
import { projectJobTokenScopes } from '@cdktf/provider-gitlab'

projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource"></a>

```typescript
import { projectJobTokenScopes } from '@cdktf/provider-gitlab'

projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport"></a>

```typescript
import { projectJobTokenScopes } from '@cdktf/provider-gitlab'

projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectJobTokenScopes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectJobTokenScopes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_job_token_scopes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectJobTokenScopes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectIdInput">projectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIdsInput">targetGroupIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIdsInput">targetProjectIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectId">projectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIds">targetGroupIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIds">targetProjectIds</a></code> | <code>number[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetGroupIdsInput`<sup>Optional</sup> <a name="targetGroupIdsInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIdsInput"></a>

```typescript
public readonly targetGroupIdsInput: number[];
```

- *Type:* number[]

---

##### `targetProjectIdsInput`<sup>Optional</sup> <a name="targetProjectIdsInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIdsInput"></a>

```typescript
public readonly targetProjectIdsInput: number[];
```

- *Type:* number[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

---

##### `targetGroupIds`<sup>Required</sup> <a name="targetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIds"></a>

```typescript
public readonly targetGroupIds: number[];
```

- *Type:* number[]

---

##### `targetProjectIds`<sup>Required</sup> <a name="targetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIds"></a>

```typescript
public readonly targetProjectIds: number[];
```

- *Type:* number[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectJobTokenScopesConfig <a name="ProjectJobTokenScopesConfig" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.Initializer"></a>

```typescript
import { projectJobTokenScopes } from '@cdktf/provider-gitlab'

const projectJobTokenScopesConfig: projectJobTokenScopes.ProjectJobTokenScopesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.project">project</a></code> | <code>string</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.projectId">projectId</a></code> | <code>number</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetGroupIds">targetGroupIds</a></code> | <code>number[]</code> | A set of group IDs that are in the CI/CD job token inbound allowlist. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetProjectIds">targetProjectIds</a></code> | <code>number[]</code> | A set of project IDs that are in the CI/CD job token inbound allowlist. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_job_token_scopes#project ProjectJobTokenScopes#project}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.projectId"></a>

```typescript
public readonly projectId: number;
```

- *Type:* number

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_job_token_scopes#project_id ProjectJobTokenScopes#project_id}

---

##### `targetGroupIds`<sup>Optional</sup> <a name="targetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetGroupIds"></a>

```typescript
public readonly targetGroupIds: number[];
```

- *Type:* number[]

A set of group IDs that are in the CI/CD job token inbound allowlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_job_token_scopes#target_group_ids ProjectJobTokenScopes#target_group_ids}

---

##### `targetProjectIds`<sup>Optional</sup> <a name="targetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetProjectIds"></a>

```typescript
public readonly targetProjectIds: number[];
```

- *Type:* number[]

A set of project IDs that are in the CI/CD job token inbound allowlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_job_token_scopes#target_project_ids ProjectJobTokenScopes#target_project_ids}

---



